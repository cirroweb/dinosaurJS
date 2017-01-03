import Ember from 'ember';

export default Ember.Route.extend({
  setupController( controller ) {
    controller.set( 'isCircleOpen', false );
  },

  actions: {
    toggleCodeOfConduct() {
      this.controller.toggleProperty('isCircleOpen');
      Ember.$('body').toggleClass('is-clipped');
    }
  }
});
