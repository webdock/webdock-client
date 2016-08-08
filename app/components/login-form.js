import Ember from 'ember';

export default Ember.Component.extend({
  email: '',
  password: '',

  actions: {
    authenticate() {
      const props = this.getProperties('email', 'password');
      console.log(props);
    },
  },
});
