import Ember from 'ember';

export default Ember.Component.extend({
  dockerContainer: null,

  actions: {
    remove() {
      this.get('dockerContainer').destroyRecord();
    },
  },
});
