import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Component.extend(RecognizerMixin, {
  recognizers: 'tap',
  isOpen: false,
  actions: {
    toggleAccordion() {
      this.toggleProperty('isOpen');
    }
  }
});
