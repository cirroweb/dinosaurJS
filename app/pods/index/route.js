import Ember from 'ember';
import TweenLite from 'tweenlite';

export default Ember.Route.extend({
  activate: function() {
    const $_bod = Ember.$('body');
    // $_x = Ember.$('.x span'),
    // $_y = Ember.$('.y span');

    Ember.$('body').on('mousemove', function(event) {
      const cx = Math.ceil(window.innerWidth / 2.0);
      const cy = Math.ceil(window.innerHeight / 2.0);
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;

      // log mouse position
      // $_x.text(dx);
      // $_y.text(dy);

      const tiltx = (dy / cy);
      const tilty = - (dx / cx);
      const radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
      const degree = (radius * 30);
      TweenLite.set(".mover", {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'});
      });
  }
});
