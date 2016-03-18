import Ember from 'ember';
const { Component, run } = Ember;

export default Component.extend({
  days:    undefined,
  hours:   undefined,
  minutes: undefined,
  seconds: undefined,

  timeTilDino() {
    let diff = new Date("June 24, 2016 09:00:00") - new Date(); // Event time - time right now

    let days       = Math.floor(diff / 86400000),
        daysToInMs = days * 86400000;

    let hours     = Math.floor((diff - daysToInMs ) / 3600000),
        hrsToInMs = hours * 3600000;

    let minutes    = Math.floor((diff - (daysToInMs + hrsToInMs)) / 60000),
        minsToInMs = minutes * 60000;

    let seconds = Math.round( (diff - (daysToInMs + hrsToInMs + minsToInMs)) / 1000 );

    this.set('days'    , days);
    this.set('hours'   , hours);
    this.set('minutes' , minutes);
    this.set('seconds' , seconds);
  },

  scheduleTimer: function () {
    run.later(function () {
      this.timeTilDino();
    }.bind(this), 1000);
  }.on('didRender'),

});
