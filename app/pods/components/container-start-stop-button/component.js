import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  toast: Ember.inject.service(),
  i18n: Ember.inject.service(),

  dockerContainer: null,

  updateContainer(response, changeMessage, keptMessage) {
    const i18n = this.get('i18n');
    const toast = this.get('toast');
    const name = this.get('dockerContainer.name');
    if (Ember.isEmpty(response)) {
      toast.info(i18n.t(keptMessage, { name: name }));
      return;
    }
    this.get('store').pushPayload(response);
    toast.success(i18n.t(changeMessage, { name: name }));
  },

  handleError(error) {
    const i18n = this.get('i18n');
    this.get('toast').error(i18n.t('container-start-stop-button.error-message'));
  },

  changeStatus(action, changeMessage, keptMessage) {
    this.get('dockerContainer')[action]()
      .then(response => this.updateContainer(response, changeMessage, keptMessage))
      .catch(error => this.handleError(error));
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
