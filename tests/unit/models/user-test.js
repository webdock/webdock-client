import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: [],
});

test('it exists', assert => {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
