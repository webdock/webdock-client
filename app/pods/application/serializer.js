import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  modelNameFromPayloadKey(payloadKey) {
    let key = payloadKey;

    // TODO extract endpoints into hash set
    if (payloadKey === 'containers' || payloadKey == 'images') {
      key = `docker-${payloadKey}`;
    }

    return this._super(key);
  },
});
