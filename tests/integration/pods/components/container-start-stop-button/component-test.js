import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('container-start-stop-button', 'Integration | Component | container start stop button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{container-start-stop-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#container-start-stop-button}}
      template block text
    {{/container-start-stop-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
