import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  dockerContainer: null,

  updateModel(response) {
    if (Ember.isEmpty(response)) {
      return;
    }
    console.log(response);
    this.get('store').pushPayload(response);
  },

  handleError(error) {
    console.log(error);
  },

  changeStatus(action) {
    this.get('dockerContainer')[action]()
      .then(response => this.updateModel(response))
      .catch(error => this.handleError(error));
  },

  actions: {
    start() {
      this.changeStatus('start')
    },

    stop() {
      this.changeStatus('stop')
    }
  }
});
