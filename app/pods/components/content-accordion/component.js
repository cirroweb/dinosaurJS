import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Component.extend(RecognizerMixin, {
  recognizers: 'tap press',
  isOpen: false,
  actions: {
    toggleAccordion() {
      this.toggleProperty('isOpen');
    }
  }
});
