import Ember from 'ember';

export default Ember.Component.extend({
  dockerContainer: null,

  actions: {
    remove() {
      const promise = this.get('dockerContainer').destroyRecord();
      promise.then(() => this.get('onRemove')());
      promise.catch(err => console.log(err));
    },
  },
});
