import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleAccordion() {
      this.toggleProperty('isOpen');
    }
  }
});
