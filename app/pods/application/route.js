import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import config from 'webdock/config/environment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  i18n: Ember.inject.service(),

  beforeModel() {
    const locale = this.determineLocale();
    this.set('i18n.locale', locale);
  },

  determineLocale() {
    const defaultLocale = config.i18n.defaultLocale;
    const locales = this.get('i18n.locales');
    const locale = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage
        || defaultLocale;

    if (locales.contains(locale)) {
      return locale;
    }

    let matchingLocale = null;
    locales.forEach(elem => {
      if (locale.startsWith(elem)) {
        if (matchingLocale === null || elem.length > matchingLocale.length) {
          matchingLocale = elem;
        }
      }
    });

    return matchingLocale || defaultLocale;
  },
});
