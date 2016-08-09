import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  itoast: Ember.inject.service(),

  dockerContainer: null,

  updateContainer(response, changeMessage, keptMessage) {
    const toast = this.get('itoast');
    const name = this.get('dockerContainer.name');
    if (Ember.isEmpty(response)) {
      toast.info(keptMessage, { name });
      return;
    }
    this.get('store').pushPayload(response);
    toast.success(changeMessage, { name });
  },

  handleError(error) {
    this.get('itoast').error('container-start-stop-button.error-message');
  },

  changeStatus(action, changeMessage, keptMessage) {
    const promise = this.get('dockerContainer')[action]();
    promise.then(response => this.updateContainer(response, changeMessage, keptMessage));
    promise.catch(error => this.handleError(error));
  },

  actions: {
    start() {
      this.changeStatus('start', 'container-start-stop-button.start-message',
                        'container-start-stop-button.already-running-message');
    },

    stop() {
      this.changeStatus('stop', 'container-start-stop-button.stop-message',
                        'container-start-stop-button.not-running-message');
    },
  },
});
