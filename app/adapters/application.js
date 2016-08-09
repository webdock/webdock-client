import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'webdock/config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.apiEndpoint,
  authorizer: 'authorizer:application',
  pathForType(modelName) {
    return this._super(modelName).replace(/^docker-/, '');
  },
});
