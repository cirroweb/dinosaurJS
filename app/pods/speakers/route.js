import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A([
      {
        name:        'Rebecca Murphey',
        linkId:      'rebecca-murphey',
        twitter:     'rmurphey',
        gitHub:      'rmurphey',
        avatar:      "https://d8142femxnlg1.cloudfront.net/cropped-profile-photos/308f928b4b266411763f163984b47d6454ec6659-t640.jpeg",
        description: [
          'Rebecca is a software engineer at Indeed, where she works on the front-end applications that power the world’s number one job site. She speaks frequently about front-end development, and writes at rmurphey.com. She lives in Austin, Texas with her partner and their son.',
        ],
        talkName:        'CHANGE ME',
        talkDescription: [
          'CHANGE ME TBH LOLZ FRANKIES BEARD',
        ]
      },
      {
        name:        'Mark DiMarco',
        linkId:      'mark-dimarco',
        twitter:     'markmarkoh',
        gitHub:      'markmarkoh',
        avatar:      "https://pbs.twimg.com/profile_images/378800000864732964/FiRVW4lF.jpeg",
        description: [
          'FILL ME IN',
        ],
        talkName: 'CHANGE ME',
        talkDescription: [
          'Asteroids and comets are among the Near Earth Objects that NASA is constantly monitoring, hoping to detect a future collision long before our planet is in danger. Mark DiMarco will show us how to scrape a the NASA website for free data and create an interactive data visualizations with D3 that shows close fly-bys of asteroids. In the process, we’ll learn a little bit about asteroids and a lot about data visualization with D3.'
        ],
      },
      {
        name:        'Jen Tong',
        linkId:      'jen-tong',
        twitter:     'MimmingCodes',
        gitHub:      'mimming',
        avatar:      "https://d8142femxnlg1.cloudfront.net/cropped-profile-photos/734f44312c207227c2820efd389414660166b039-t640.jpeg",
        description: [
          "Jenny is a Developer Advocate on Cloud at Google. In this role she helps developers build cool stuff on all sorts of platforms. Previously she worked in a wide variety of software roles from robotics at NASA, to developer advocacy for Google Glass.",
          "She is passionate about education, especially on the subjects of technology and science. If she's away from her laptop, she's probably skating around a roller derby track, or hanging from aerial silk."
        ],
        talkName: 'CHANGE ME',
        talkDescription: [
          'FILL ME IN',
        ]
      }
    ]);
  },
  actions: {
    toggleAccordion(e) {
      debugger;
    }
  }
});
