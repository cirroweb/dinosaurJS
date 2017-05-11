import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('webcam-seventeen', 'Integration | Component | webcam seventeen', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{webcam-seventeen}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#webcam-seventeen}}
      template block text
    {{/webcam-seventeen}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
