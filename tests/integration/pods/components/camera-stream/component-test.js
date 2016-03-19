import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('camera-stream', 'Integration | Component | camera stream', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{camera-stream}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#camera-stream}}
      template block text
    {{/camera-stream}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
