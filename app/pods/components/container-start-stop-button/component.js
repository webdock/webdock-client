import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  toast: Ember.inject.service(),

  dockerContainer: null,

  updateContainer(response, changeMessage, keptMessage) {
    const toast = this.get('toast');
    if (Ember.isEmpty(response)) {
      toast.info(keptMessage);
      return;
    }
    this.get('store').pushPayload(response);
    toast.success(changeMessage);
  },

  handleError(error) {
    this.get('toast').error('An error occurred!');
  },

  changeStatus(action, changeMessage, keptMessage) {
    this.get('dockerContainer')[action]()
      .then(response => this.updateContainer(response, changeMessage, keptMessage))
      .catch(error => this.handleError(error));
  },

  actions: {
    start() {
      const name = this.get('dockerContainer.name');
      this.changeStatus('start', `Container ${name} started!`, `Container ${name} was already running!`);
    },

    stop() {
      const name = this.get('dockerContainer.name');
      this.changeStatus('stop', `Container ${name} stopped!`, `Container ${name} was not running!`);
    },
  },
});
