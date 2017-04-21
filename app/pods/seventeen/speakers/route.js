import Ember from 'ember';

const { Route, A } = Ember;

export default Route.extend({
  setupController(controller) {
    controller.set('speakers', A([
      {
        picture: "url(http://www.larquinlabs.com/images/profile.jpg)",
        name: "Micah Adams",
        twitterLink: "https://twitter.com/larquinius",
        githubLink: "https://github.com/larquin",
        bio: "Micah Adams is a software engineer with over a decade of professional experience. He has an extensive background in developing applications for health care professionals and scientists, with a focus on leveraging informatics and data science to solve complex questions around quality of health care and genomic research. Micah's graduate work focused on Human Computer Interaction and Computer Science. He is interested in functional programming, machine learning/nlp, and data driven design.",
      specialClasses: ""
      },
      {
        picture: "url(https://avatars0.githubusercontent.com/u/1994686?v=3&s=200)",
        name: "Scott Davis",
        twitterLink: "https://twitter.com/scottdavis99",
        githubLink: "https://github.com/thirstyhead",
        bio: "Scott Davis is a Principal Engineer with ThoughtWorks, where he focuses on leading-edge / innovative / emerging / non-traditional aspects of web development. This includes serverless web apps, mobile web apps (Responsive PWAs), HTML5-based SmartTV apps, Conversational UIs (like Siri and Alexa), and using web technologies to build IoT solutions. Scott founded ThirstyHead, a Denver-based training and software development consultancy, in 2006. Scott co-founded the HTML5 Denver User Group in 2011.",
        specialClasses: ""
      },
      {
        picture: "url(https://hharnisc.github.io/images/me3.jpg)",
        name: "Harrison Harnisch",
        twitterLink: "https://twitter.com/hjharnis",
        githubLink: "https://github.com/hharnisc",
        bio: 'Harrison is a Senior Software Engineer at Buffer implementing the transition to a modern stack built on Node, React and Redux. He has had a role in migrating 3 large web applications and is an active open source contributor. In a past life he was a touring drummer in a band called "The Sweethearts Of The Rodeo".',
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/677012495358275584/RWWmGcmE.jpg)",
        name: "Billy Roh",
        twitterLink: null,
        githubLink: "https://github.com/billyroh",
        bio: 'Billy Roh is a product design lead at Opendoor. He helps organize a monthly meetup called WaffleJS in his spare time. Before Opendoor, he was a designer at Facebook.',
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/837397502210891777/9dxq0N4h.jpg)",
        name: "Laurie Voss",
        twitterLink: "https://twitter.com/seldo",
        githubLink: "https://github.com/seldo",
        bio: "I'm currently COO, formerly CTO of npm, Inc.. I have been building big, fast websites for 21 years and I want everybody in the world to be able to join me, because it's fun.",
        specialClasses: ""
      },
      {
        picture: "url(https://dl.dropboxusercontent.com/u/146879/lawnsea-headshot.jpeg)",
        name: "Lon Ingram",
        twitterLink: "https://twitter.com/lawnsea",
        githubLink: "https://github.com/lawnsea",
        bio: "Lon is a Principal UI Engineer at RetailMeNot. He is fascinated with applying ideas from systems research to the challenge of building cool complicated things on the web.",
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/714160971137347584/kR6KSJbw_400x400.jpg)",
        name: "Myles Borins",
        twitterLink: "https://twitter.com/MylesBorins",
        githubLink: "https://github.com/MylesBorins",
        bio: "Myles Borins is a developer, musician, artist, and maker He works for Google as a developer advocate serving the Node.js ecosystem He cares about the open web and healthy communities.",
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/661485440751509505/ZnNN9qes.jpg)",
        name: "F. Hinkelmann",
        twitterLink: "https://twitter.com/fhinkel",
        githubLink: "https://github.com/fhinkel",
        bio: "Franziska has a Ph.D. in mathematics and is a software engineer on Google’s V8 team. She's an expert on ES6 performance and a Node.js core collaborator. When she's not working hard on making JavaScript and Node faster, she's out horseback riding.",
        specialClasses: ""
      },
    ]))
  }
});
