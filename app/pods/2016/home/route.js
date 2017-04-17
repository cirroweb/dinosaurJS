import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    scrollDown() {
      $('html, body').animate({
       scrollTop: $("#about").offset().top
   }, 1000);
    }
  }
});
