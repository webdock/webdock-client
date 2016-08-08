import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  identification: '',
  password: '',

  actions: {
    authenticate() {
      const credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:token', credentials);
    },
  },
});
