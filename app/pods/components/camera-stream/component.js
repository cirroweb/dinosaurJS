import Ember from 'ember';
const { Component, computed, run } = Ember;

export default Component.extend({
  isSupported: false,
  setSrc: function() {
    navigator.getUserMedia = (navigator.getUserMedia       ||
                              navigator.webkitGetUserMedia ||
                              navigator.mozGetUserMedia    || 
                              navigator.msGetUserMedia);

    if (navigator.getUserMedia) {
      run.scheduleOnce('afterRender', this, function() {
        this.set('isSupported', true);
      });

      // Request camera
      navigator.getUserMedia({ video: true }, (localMediaStream) => {
          let vid = document.getElementById("camera-stream");
          vid.src = window.URL.createObjectURL(localMediaStream);
          vid.play();
        }, (error) => {
          console.log(`The following error occurred with using getUserMedia: ${error}`);
        }
      );
    }   
  }.on('didRender')

});
