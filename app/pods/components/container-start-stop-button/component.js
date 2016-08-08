import Ember from 'ember';

export default Ember.Component.extend({
  dockerContainer: null,

  updateModel(response) {
    if (Ember.isEmpty(response)) {
      console.log("Nothing changed");
      return;
    }
    console.log(response);
  },

  handleError(error) {
    console.log(error);
  },

  changeStatus(action) {
    this.get('dockerContainer')[action]()
      .then(this.updateModel)
      .catch(this.handleError)
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
