import Ember from 'ember';
import TweenLite from 'tweenlite';
import DeviceOrientationAware from 'ember-orientation/mixins/device-orientation-aware';

const { Component } = Ember;

export default Component.extend(DeviceOrientationAware, {
  mouseMove(event) {
    this.tilt(event);
  },

  tilt(event) {
      const cx     = Math.ceil(window.innerWidth / 2.0);
      const cy     = Math.ceil(window.innerHeight / 2.0);
      const dx     = event.clientX - cx;
      const dy     = event.clientY - cy;
      const tiltx  = -(dy / cy);
      const tilty  = (dx / cx);
      this.calcAndApplyTilt(tiltx, tilty, 1);
  },

  didTilt(evt) {
    let { beta, gamma } = evt;
    const clampedGamma = this.clampNumber(gamma, -50, 40)/2;
    const clampedBeta  = this.clampNumber((beta - 30), -40, 40)/2;
     TweenLite.set(".mover", {transform: `rotateY(${-clampedGamma}deg) rotateX(${-clampedBeta}deg) rotateZ(${- 180}deg)`, ease: 'linear'});
  },

  calcAndApplyTilt(x, y, exaggerate) {
    const radius = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    const degree = (radius * 30 * exaggerate);
    TweenLite.set(".mover", {transform:'rotate3d(' + x + ', ' + y + ', 0, ' + degree + 'deg)'});
  },

  clampNumber(number, min, max) {
    return number <= min ? min : number >= max ? max : number;
  }
});
