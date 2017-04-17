import Ember from 'ember';
import TweenLite from 'tweenlite';

export default Ember.Route.extend({
  activate: function() {
    // const $_bod = Ember.$('body');
    // $_x = Ember.$('.x span'),
    // $_y = Ember.$('.y span');

    // window.addEventListener("devicemotion", this.throttleRotate, true);

    if (window.innerWidth > 1024) {
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
  },

  throttleRotate(e) {
    // var time = Date.now();
    // if ((time + 500 - Date.now()) < 0) {
    //   let x = event.accelerationIncludingGravity.x * 50;
    //   let y = event.accelerationIncludingGravity.y * 50;
    //   let z = event.accelerationIncludingGravity.z * 20;
    //
    //   TweenLite.set(".mover", {transform:'rotate3d(' + x + ', ' + y + ', 0, ' + z + 'deg)'});
    //   time = Date.now();
    // }
  }

  // handleRotate(x,y,z) {
  //   // const radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
  //   // const degree = (radius * 30);
  //   TweenLite.set(".mover", {transform:'rotate3d(' + x + ', ' + y + ', 0, ' + z + 'deg)'});
  //   // let az = event.accelerationIncludingGravity.z
  //   // console.log(e);
  //     // if ( window.ondeviceOrientation != undefined ) {
  //       // let alpha = Math.round(e.alpha);
  //       // let beta = Math.round(e.beta);
  //       // let gamma = Math.round(e.gamma);
  //       // console.log(alpha, beta, gamma);
  //     // }
  // }

});
