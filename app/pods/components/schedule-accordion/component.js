import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Component.extend(RecognizerMixin, {
  recognizers: 'tap',
  isOpen: true,
  actions: {
    toggleAccordion() {
      this.toggleProperty('isOpen');
    }
  }
});
