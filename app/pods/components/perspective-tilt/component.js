import Ember from 'ember';
import TweenLite from 'tweenlite';

const { Component, $, on, run: { scheduleOnce } } = Ember;

export default Ember.Component.extend({
  initializeMotionTilt: function() {
    scheduleOnce('afterRender', this, this.registerDeviceTilt);
  }.on('init'),

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

  registerDeviceTilt() { 
    if (window.DeviceOrientationEvent && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      window.addEventListener("deviceorientation", this.deviceTilt.bind(this));
    }
  },

  calcAndApplyTilt(x, y, exaggerate) {
    const radius = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    const degree = (radius * 30 * exaggerate);
    TweenLite.set(".mover", {transform:'rotate3d(' + x + ', ' + y + ', 0, ' + degree + 'deg)'});
  },

  deviceTilt(e) {
    if(e.alpha && e.beta && e.gamma) {
      // const tilt = {x: (e.beta /100), y: (-e.gamma/100) };
      const tiltx = (((Math.abs(e.beta) - 50) * 2) / 100);
      // const tiltx = (e.beta /100);
      const tilty = (-e.gamma/100);
      // const tilty = (((Math.abs(e.gamma) - 50) * 2) / 100);
      this.calcAndApplyTilt(tiltx, tilty, .5);
    }
  }

});
