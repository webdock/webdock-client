import Ember from 'ember';

export default Ember.Service.extend({
  i18n: Ember.inject.service(),
  toast: Ember.inject.service(),

  info(messageKey, options) {
    this.message('info', messageKey, options);
  },

  success(messageKey, options) {
    this.message('success', messageKey, options);
  },

  warning(messageKey, options) {
    this.message('warning', messageKey, options);
  },

  error(messageKey, options) {
    this.message('error', messageKey, options);
  },

  message(type, messageKey, options) {
    const i18n = this.get('i18n');
    this.get('toast')[type](i18n.t(messageKey, options || {}));
  },
});
