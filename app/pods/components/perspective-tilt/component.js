import Ember from 'ember';
import TweenLite from 'tweenlite';
import DeviceOrientationAware from 'ember-orientation/mixins/device-orientation-aware';

const { Component, $, on, run: { scheduleOnce } } = Ember;

export default Ember.Component.extend(DeviceOrientationAware, {
  // initializeMotionTilt: function() {
  //   scheduleOnce('afterRender', this, this.registerDeviceTilt);
  // }.on('init'),

  orientation: '',
  tx: 0,
  ty: 0,
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

  // registerDeviceTilt() {
  //   if (window.DeviceOrientationEvent && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  //     window.addEventListener("deviceorientation", this.deviceTilt.bind(this));
  //   }
  // },

  didTilt(evt) {
    let {alpha, beta, gamma} = evt;
    // if( alpha && beta && gamma ) {
    // this.set('orientation', `a: ${alpha}, b: ${beta}, g: ${gamma}`);
    // const tilt = {x: (e.beta /100), y: (-e.gamma/100) };
    // const tiltx = (((Math.abs(beta) - 50) * 2) / 200);
    // const tiltx = beta / 200;
    // const tilty = gamma / 200;
    // const tiltx = ( this.numberClamp(beta, -100, 100) / 100);
    // this.set('tx', tiltx);
    // const tilty = (-this.numberClamp(gamma, -100, 100) / 100);
    // this.set('ty', tilty);
    // this.set('orientation', `x: ${this.numberClamp(beta, -100, 100)}, y: ${this.numberClamp(gamma, -100, 100)}`);
    // const tilty = (((Math.abs(e.gamma) - 50) * 2) / 100);
    // this.calcAndApplyTilt(tiltx, tilty, 1);
    // }
    // console.log(beta, gamma, alpha);
    // TweenLite.set(".mover", {transform:`rotate3d(-${beta}, ${gamma}, ${alpha}, 60deg)`});
     TweenLite.set(".mover", {transform: `rotateY(${-gamma}deg) rotateX(${-(beta - 45)}deg) rotateZ(${ - 180}deg)`});
  },
  //
  // debouncedDidTilt(evt) {
  //   let {alpha, beta, gamma} = evt;
  //   // if( alpha && beta && gamma ) {
  //   this.set('orientation', `a: ${alpha}, b: ${beta}, g: ${gamma}`);
  //   // const tilt = {x: (e.beta /100), y: (-e.gamma/100) };
  //   // const tiltx = (((Math.abs(beta) - 50) * 2) / 200);
  //   const tiltx = ( beta / 200);
  //   const tilty = (-gamma / 200);
  //   // const tilty = (((Math.abs(e.gamma) - 50) * 2) / 100);
  //   this.calcAndApplyTilt(tiltx, tilty, .5);
  //   // }
  // },

  calcAndApplyTilt(x, y, exaggerate) {
    const radius = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    const degree = (radius * 30 * exaggerate);
    TweenLite.set(".mover", {transform:'rotate3d(' + x + ', ' + y + ', 0, ' + degree + 'deg)'});
  },

  // deviceTilt(e) {
  //   if(e.alpha && e.beta && e.gamma) {
  //     // const tilt = {x: (e.beta /100), y: (-e.gamma/100) };
  //     const tiltx = (((Math.abs(e.beta) - 50) * 2) / 100);
  //     // const tiltx = (e.beta /100);
  //     const tilty = (-e.gamma/100);
  //     // const tilty = (((Math.abs(e.gamma) - 50) * 2) / 100);
  //     this.calcAndApplyTilt(tiltx, tilty, .5);
  //   }
  // }

  clampNumber(number, min, max) {
    // return Math.min(Math.max(number, min), max);
    return number <= min ? min : number >= max ? max : number;
  }

});
