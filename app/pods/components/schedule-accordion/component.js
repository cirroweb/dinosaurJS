import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleAccordion() {
      this.set('isOpen', !this.get('isOpen'));
    }
  }
});
