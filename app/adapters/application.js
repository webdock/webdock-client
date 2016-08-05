import DS from 'ember-data';

import config from 'webdock/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiEndpoint,
});
