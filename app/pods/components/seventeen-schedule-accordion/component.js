import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['hasToggle:toggleable:not-toggleable'],
  isOpen: false,
  time: "",
  title: "",
  hasToggle: false,
  click() {
    if(this.get('hasToggle')) {
      this.toggleProperty('isOpen');
    }
  }
});
