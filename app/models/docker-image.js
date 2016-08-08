import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  parentId: DS.attr(),
  repoTags: DS.attr(),
  repoDigests: DS.attr(),
  created: DS.attr(),
  size: DS.attr(),
  virtualSize: DS.attr(),
  labels: DS.attr(),
  containers: DS.hasMany('docker-container'),

  shortId: Ember.computed('id', function () {
    return `${this.get('id').substring(0, 12)}`;
  })
});
