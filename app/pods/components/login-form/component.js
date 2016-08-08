import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  message: null,
  identification: '',
  password: '',

  actions: {
    authenticate() {
      const credentials = this.getProperties('identification', 'password');
      const result = this.get('session').authenticate('authenticator:token', credentials);
      result.catch(err => this.set('errorMessage', err.message || err));
      result.then(() => this.set('errorMessage', undefined));
    },
  },
});
