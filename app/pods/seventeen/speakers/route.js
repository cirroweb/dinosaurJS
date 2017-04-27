import Ember from 'ember';

const { Route, A } = Ember;

export default Route.extend({
  setupController(controller) {
    controller.set('speakers', A([
      {
        picture: "url(https://avatars0.githubusercontent.com/u/90888?v=3&s=400)",
        name: "Tom Dale",
        twitterLink: "https://twitter.com/tomdale?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        githubLink: "https://github.com/tomdale",
        linkedInLink: "https://www.linkedin.com/in/tommothereffindale",
        bio: "Tom helped create Ember.js and was doing big JavaScript apps before it was cool. He works at LinkedIn, where he builds open source tools to help developers of all experience levels craft web applications that load fast and feel great.",
        specialClasses: ""
      },
      {
        picture: "url(https://avatars2.githubusercontent.com/u/1369170?v=3&s=400)",
        name: "Monica Dinculescu",
        twitterLink: "https://twitter.com/notwaldorf",
        githubLink: "https://github.com/notwaldorf",
        linkedInLink: "",
        bio: "Monica is an emojineer at Google. She works on Polymer, web components and Chrome, and has probably at least once broken the Internet for you. She is unreasonably excited about emoji, wary of web fonts, and will become your best friend if you bring her cheese. On second thought, she may be a mouse.",
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/795006322450300928/gsDDaLau.jpg)",
        name: "Kassandra Perch, a.k.a. the Nodebotanist",
        twitterLink: "https://twitter.com/nodebotanist",
        githubLink: "https://github.com/nodebotanist",
        linkedInLink: "",
        bio: "Kassandra is a Developer Relations Engineer at IOpipe by day, and a new longboarder and Electrical Engineering student by night. They like to build NodeBots and snuggle cats in their ATX home when not out doing those things.",
      specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/801417524160167936/OnD7CHnk.jpg)",
        name: "Brittany Storoz",
        twitterLink: "https://twitter.com/@brittanystoroz",
        githubLink: "https://github.com/brittanystoroz",
        linkedInLink: "",
        bio: "Brittany Storoz is an instructor for the frontend program at the Turing School of Software and Design. She has spoken at conferences and has worked at Mozilla and the  New York Times.",
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/840733033904783361/Kuqj0KQ3.jpg)",
        name: "Rachel White",
        twitterLink: "https://twitter.com/ohhoe",
        githubLink: "https://github.com/rachelnicole",
        linkedInLink: "",
        bio: "Rachel White is a technologist, artist, and pretend-cyborg who is currently a Tech Evangelist at Microsoft. She is interested in new uses for old hardware, useless robots, VR/AR/MR, and bots. she has spoken internationally about JavaScript Robotics, Twitter Bots, and browser based Video Games. Rachel is currently working on multiple video game projects, a VR cat cafe, and thinking about what IoT devices she can build for her two black cats. Her other interests include glitch art, 80â€™s horror, and indie games. Her aesthetic is fog machines, laser lights, and broken VHS tapes.",
        specialClasses: ""
      },
      {
        picture: "url(https://avatars3.githubusercontent.com/u/96180?v=3&s=400)",
        name: "Micah Adams",
        twitterLink: "https://twitter.com/larquinius",
        githubLink: "https://github.com/larquin",
        linkedInLink: "",
        bio: "Micah Adams is a software engineer with over a decade of professional experience. He has an extensive background in developing applications for health care professionals and scientists, with a focus on leveraging informatics and data science to solve complex questions around quality of health care and genomic research. Micah's graduate work focused on Human Computer Interaction and Computer Science. He is interested in functional programming, machine learning/nlp, and data driven design.",
      specialClasses: ""
      },
      {
        picture: "url(https://avatars0.githubusercontent.com/u/1994686?v=3&s=200)",
        name: "Scott Davis",
        twitterLink: "https://twitter.com/scottdavis99",
        githubLink: "https://github.com/thirstyhead",
        linkedInLink: "",
        bio: "Scott Davis is a Principal Engineer with ThoughtWorks, where he focuses on leading-edge / innovative / emerging / non-traditional aspects of web development. This includes serverless web apps, mobile web apps (Responsive PWAs), HTML5-based SmartTV apps, Conversational UIs (like Siri and Alexa), and using web technologies to build IoT solutions. Scott founded ThirstyHead, a Denver-based training and software development consultancy, in 2006. Scott co-founded the HTML5 Denver User Group in 2011.",
        specialClasses: ""
      },
      {
        picture: "url(https://hharnisc.github.io/images/me3.jpg)",
        name: "Harrison Harnisch",
        twitterLink: "https://twitter.com/hjharnis",
        githubLink: "https://github.com/hharnisc",
        linkedInLink: "",
        bio: 'Harrison is a Senior Software Engineer at Buffer implementing the transition to a modern stack built on Node, React and Redux. He has had a role in migrating 3 large web applications and is an active open source contributor. In a past life he was a touring drummer in a band called "The Sweethearts Of The Rodeo".',
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/677012495358275584/RWWmGcmE.jpg)",
        name: "Billy Roh",
        twitterLink: null,
        githubLink: "https://github.com/billyroh",
        linkedInLink: "",
        bio: 'Billy Roh is a product design lead at Opendoor. He helps organize a monthly meetup called WaffleJS in his spare time. Before Opendoor, he was a designer at Facebook.',
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/837397502210891777/9dxq0N4h.jpg)",
        name: "Laurie Voss",
        twitterLink: "https://twitter.com/seldo",
        githubLink: "https://github.com/seldo",
        linkedInLink: "",
        bio: "I'm currently COO, formerly CTO of npm, Inc.. I have been building big, fast websites for 21 years and I want everybody in the world to be able to join me, because it's fun.",
        specialClasses: ""
      },
      {
        picture: "url(https://dl.dropboxusercontent.com/u/146879/lawnsea-headshot.jpeg)",
        name: "Lon Ingram",
        twitterLink: "https://twitter.com/lawnsea",
        githubLink: "https://github.com/lawnsea",
        linkedInLink: "",
        bio: "Lon is a Principal UI Engineer at RetailMeNot. He is fascinated with applying ideas from systems research to the challenge of building cool complicated things on the web.",
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/714160971137347584/kR6KSJbw_400x400.jpg)",
        name: "Myles Borins",
        twitterLink: "https://twitter.com/MylesBorins",
        githubLink: "https://github.com/MylesBorins",
        linkedInLink: "",
        bio: "Myles Borins is a developer, musician, artist, and maker He works for Google as a developer advocate serving the Node.js ecosystem He cares about the open web and healthy communities.",
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/661485440751509505/ZnNN9qes.jpg)",
        name: "F. Hinkelmann",
        twitterLink: "https://twitter.com/fhinkel",
        githubLink: "https://github.com/fhinkel",
        linkedInLink: "",
        bio: "Franziska has a Ph.D. in mathematics and is a software engineer on Google’s V8 team. She's an expert on ES6 performance and a Node.js core collaborator. When she's not working hard on making JavaScript and Node faster, she's out horseback riding.",
        specialClasses: ""
      },
    ]));
  }
});
