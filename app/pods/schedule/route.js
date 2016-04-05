import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A([
      {
        name:      "Jen's Talk",
        time:      "TBD - TBD",
        speaker:   "Jen Tong",
        speakerId: "jen-tong",
        talkDescription: [
          "First line of jenny's talk description",
          "Second line of jenny's talk description"
        ]
      },
      {
        name:      "Mark's Talk",
        time:      "TBD - TBD",
        speaker:   "Mark DiMarco",
        speakerId: "mark-dimarco",
        talkDescription: [
          "Asteroids and comets are among the Near Earth Objects that NASA is constantly monitoring, hoping to detect a future collision long before our planet is in danger. Mark DiMarco will show us how to scrape a the NASA website for free data and create an interactive data visualizations with D3 that shows close fly-bys of asteroids. In the process, we’ll learn a little bit about asteroids and a lot about data visualization with D3."
        ]
      },
      {
        name:      "Rebecca's Talk",
        time:      "TBD - TBD",
        speaker:   "Rebecca Murphey",
        speakerId: "rebecca-murphey",
        talkDescription: [
          "First line of jenny's talk description",
          "Second line of jenny's talk description"
        ]
      }
    ]);
  },
});
