import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onRemove() {
      this.transitionToRoute('containers');
    },
  },
});
