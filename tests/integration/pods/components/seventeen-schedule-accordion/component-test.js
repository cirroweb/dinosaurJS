import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('seventeen-schedule-accordion', 'Integration | Component | seventeen schedule accordion', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{seventeen-schedule-accordion}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#seventeen-schedule-accordion}}
      template block text
    {{/seventeen-schedule-accordion}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
