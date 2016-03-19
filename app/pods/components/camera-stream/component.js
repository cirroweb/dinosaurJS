import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  setSrc: function() {
    navigator.getUserMedia = (navigator.getUserMedia       ||
                              navigator.webkitGetUserMedia ||
                              navigator.mozGetUserMedia    || 
                              navigator.msGetUserMedia);

    if (navigator.getUserMedia) {
      // Request camera
      navigator.getUserMedia({ video: true }, (localMediaStream) => {
          let vid = document.getElementById("camera-stream");
          vid.src = window.URL.createObjectURL(localMediaStream);
          vid.play();
        }, (error) => {
          console.log(`The following error occurred with using getUserMedia: ${error}`);
        }
      );

    } else {
      alert('Whoa there, looks like your browser isn\'t supporting getUserMedia...');
    }    
  }.on('didRender')

});
