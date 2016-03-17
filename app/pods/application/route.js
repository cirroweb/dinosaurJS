import Ember from 'ember';

export default Ember.Route.extend({
  dom: {
    $body: $('body'),
  },


  actions: {
    toggleNav() {
      this.dom.$body.toggleClass('nav-open');
    }
  }
});
