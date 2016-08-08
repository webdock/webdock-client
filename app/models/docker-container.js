import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  // image: DS.belongsTo('docker-image'),
  status: DS.attr(),
  created: DS.attr('date'),
  command: DS.attr(),
  ports: DS.attr(),
});
