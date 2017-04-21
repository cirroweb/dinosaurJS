import Ember from 'ember';

export default Ember.Component.extend({
  showingMenu: false,
  actions: {
    toggleMenu(value) {
      this.set('showingMenu', value);
    }
  }
});
