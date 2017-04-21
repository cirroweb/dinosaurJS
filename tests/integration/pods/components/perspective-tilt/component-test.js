import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('perspective-tilt', 'Integration | Component | perspective tilt', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{perspective-tilt}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#perspective-tilt}}
      template block text
    {{/perspective-tilt}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
