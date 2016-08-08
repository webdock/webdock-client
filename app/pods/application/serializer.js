import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  modelNameFromPayloadKey(payloadKey) {
    let key = payloadKey;

    if (payloadKey === 'containers') {
      key = `docker-${payloadKey}`;
    }

    return this._super(key);
  },
});
