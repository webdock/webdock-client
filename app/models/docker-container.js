import Ember from 'ember';
import DS from 'ember-data';
import { memberAction } from 'ember-api-actions';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.belongsTo('docker-image'),
  status: DS.attr(),
  created: DS.attr('date'),
  command: DS.attr(),
  ports: DS.attr(),

  start: memberAction({ path: 'start', type: 'post' }),
  stop: memberAction({ path: 'stop', type: 'post' }),

  shortId: Ember.computed('id', function () {
    return this.get('id').substring(0, 12);
  }),

  isRunning: Ember.computed.equal('status', 'running'),
});
