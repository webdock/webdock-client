import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  i18n: Ember.inject.service(),

  beforeModel() {
    this.set('i18n.locale', 'en');
  },
});
