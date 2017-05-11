import Ember from 'ember';

const { Route, A } = Ember;

export default Route.extend({
  setupController(controller) {
    controller.set('speakers', A([
      {
        picture: "url(assets/tom.jpg)",
        name: "Tom Dale",
        talkName: "Making the Jump: How Desktop-Era Frameworks Can Thrive on Mobile",
        talkAbstract: "Today’s most popular frameworks come from a time when the world was a different place. Ember’s first rendering engine, for example, was optimized around the performance gotchas of Internet Explorer 6. IE6 has since faded into history, and smartphones with spotty connectivity and occasionally dodgy hardware have become the lowest common denominator that we must optimize for. In this talk, we’ll discuss how smartphones fundamentally change the assumptions we make about architecting applications for the web. Then, we’ll cover how we can embrace these new mobile constraints to build even better apps—for everyone. Finally, we’ll look at the techniques used by desktop-era libraries and what they’re doing to become great for the mobile web.",
        twitterLink: "https://twitter.com/tomdale?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        githubLink: "https://github.com/tomdale",
        linkedInLink: "https://www.linkedin.com/in/tommothereffindale",
        type: "Keynote",
        isKeynote: false,
        bio: "Tom helped create Ember.js and was doing big JavaScript apps before it was cool. He works at LinkedIn, where he builds open source tools to help developers of all experience levels craft web applications that load fast and feel great.",
        specialClasses: ""
      },
      {
        picture: "url(assets/monica.jpg)",
        name: "Monica Dinculescu",
        talkName: "Emoji, Web Components, and Art",
        talkAbstract: "Making art on the web is easy, if you got the right tools. HTML has styled divs. JavaScript has canvas. I have an emoji keyboard. But what if our tools were better, and making art was easier? What if there was a magical widget that transformed any word into emoji word art? Or an image into pixels, which you can then style with CSS? What if it was easy to build these tools, embed them on any sites, and give them out to people, so that they can make art? Spoilers: it is, and I’m going to tell you about it.",
        twitterLink: "https://twitter.com/notwaldorf",
        githubLink: "https://github.com/notwaldorf",
        linkedInLink: "",
        type: "Keynote",
        isKeynote: false,
        bio: "Monica is an emojineer at Google. She works on Polymer, web components and Chrome, and has probably at least once broken the Internet for you. She is unreasonably excited about emoji, wary of web fonts, and will become your best friend if you bring her cheese. On second thought, she may be a mouse.",
        specialClasses: ""
      },
      {
        picture: "url(assets/kassandra.jpg)",
        name: "Kassandra Perch, a.k.a. the Nodebotanist",
        talkName: "IoT.js",
        talkAbstract: "You’ve seen NodeBots, but how do you build systems with NodeBots? What systems would you build? In this workshop, we’ll take a deeper dive into NodeBots (but we’ll cover the basics in case you’re new or it’s been awhile)– we’ll talk about why serverless and IoT are best buddies, and discuss why and how you’d build a system of NodeBots devices.",
        twitterLink: "https://twitter.com/nodebotanist",
        githubLink: "https://github.com/nodebotanist",
        linkedInLink: "",
        type: "Workshop",
        isKeynote: false,
        bio: "Kassandra is a Developer Relations Engineer at IOpipe by day, and a new longboarder and Electrical Engineering student by night. They like to build NodeBots and snuggle cats in their ATX home when not out doing those things.",
      specialClasses: ""
      },
      {
        picture: "url(assets/brittany.jpg)",
        name: "Brittany Storoz",
        talkName: "Finding & Fixing All The Broken Things: An Uncomfortably Close Look at Chrome Developer Tools",
        talkAbstract: "Let’s be real. Code is broken way more often than it’s working. That’s why we have dev tools. But how useful they are is entirely dependent on how well we understand them. In this workshop we’ll take a look at some of the more advanced features of Chrome Canary’s developer tools. We’ll explore some of the lesser known functionality, play around with experimental features, and learn how extending dev tools can help us better understand our applications.",
        twitterLink: "https://twitter.com/@brittanystoroz",
        githubLink: "https://github.com/brittanystoroz",
        linkedInLink: "",
        type: "Workshop",
        isKeynote: false,
        bio: "Brittany Storoz is an instructor for the frontend program at the Turing School of Software and Design. She has spoken at conferences and has worked at Mozilla and the  New York Times.",
        specialClasses: ""
      },
      {
        picture: "url(assets/marla.jpg)",
        name: "Marla Brizel",
        talkName: "ClojureScript for JavaScript Developers ",
        talkAbstract: "Tired of fighting with state? (Don’t worry, we all are.) Are you interested in learning the ins and outs of functional programming? Want to learn a new language to expand your horizons? Come learn how to write for the browser using ClojureScript—a Lisp-inspired language that compiles down to JavaScript and offers interoperability with browser APIs and existing client-side libraries. In this workshop, you’ll learn how to write useful code in a functional language and how to apply these same concepts to your vanilla JavaScript.",
        twitterLink: "https://twitter.com/@brittanystoroz",
        githubLink: "https://github.com/brittanystoroz",
        linkedInLink: "",
        type: "Workshop",
        isKeynote: false,
        bio: "Marla Brizel is a software developer at Democracy Works where she works on various initiatives to ensure that no voter should ever have to miss an election. She also helps curate the session lineup for Denver Startup Week and is an expert in agile development practices. She spends as much time as she possibly can skiing and trail running in the mountains.",
        specialClasses: ""
      },
      {
        picture: "url(assets/rachelw.jpg)",
        name: "Rachel White",
        talkName: "Machine Learning Made Easy",
        talkAbstract: "If you’ve ever wondered what cat you would be, you’re in luck. Using Microsoft’s Cognitive services Emotion Analysis API, we’ll build a quick and easy to use node application that will analyze your selfies and let you know what purrfect feline suits your mood. Don’t like cats? That’s cool, swap out for your animal of choice.",
        twitterLink: "https://twitter.com/ohhoe",
        githubLink: "https://github.com/rachelnicole",
        linkedInLink: "",
        type: "Workshop",
        isKeynote: false,
        bio: "Rachel White is a technologist, artist, and pretend-cyborg who is currently a Tech Evangelist at Microsoft. She is interested in new uses for old hardware, useless robots, VR/AR/MR, and bots. she has spoken internationally about JavaScript Robotics, Twitter Bots, and browser based Video Games. Rachel is currently working on multiple video game projects, a VR cat cafe, and thinking about what IoT devices she can build for her two black cats. Her other interests include glitch art, 80â€™s horror, and indie games. Her aesthetic is fog machines, laser lights, and broken VHS tapes.",
        specialClasses: ""
      },
      {
        picture: "url(assets/micah.jpg)",
        name: "Micah Adams",
        talkName: "One Day We Will All Be Front End Developers ",
        talkAbstract: "Front end development skills are becoming more essential as organizations continue to leverage platforms and infrastructures as services. This talk seeks to give developers with various levels of experience a perspective on where we have come so far, where we are going, and tools to navigate the new front end ecosystem.",
        twitterLink: "https://twitter.com/larquinius",
        githubLink: "https://github.com/larquin",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Micah Adams is a software engineer with over a decade of professional experience. He has an extensive background in developing applications for health care professionals and scientists, with a focus on leveraging informatics and data science to solve complex questions around quality of health care and genomic research. Micah's graduate work focused on Human Computer Interaction and Computer Science. He is interested in functional programming, machine learning/nlp, and data driven design.",
      specialClasses: ""
      },
      {
        picture: "url(assets/scott.jpg)",
        name: "Scott Davis",
        talkName: "Conversational UIs: Talking to Siri, Alexa, and Your Web Browser",
        talkAbstract: "A typical user experience these days moves seamlessly between smartphones, tablets, laptops, and even smart TVs without us even thinking about it. But what if there is no screen? What if your User Interface is talking to your wrist, or talking to thin air as you walk into a room? Gartner predicts that 30% of all interactions with computers will be done with your voice by 2020. In this talk, [REDACTED] helps break down what Conversational UIs are, and how you can adopt them in your application.",
        twitterLink: "https://twitter.com/scottdavis99",
        githubLink: "https://github.com/thirstyhead",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Scott Davis is a Principal Engineer with ThoughtWorks, where he focuses on leading-edge / innovative / emerging / non-traditional aspects of web development. This includes serverless web apps, mobile web apps (Responsive PWAs), HTML5-based SmartTV apps, Conversational UIs (like Siri and Alexa), and using web technologies to build IoT solutions. Scott founded ThirstyHead, a Denver-based training and software development consultancy, in 2006. Scott co-founded the HTML5 Denver User Group in 2011.",
        specialClasses: ""
      },
      {
        picture: "url(assets/harrison.jpg)",
        name: "Harrison Harnisch",
        talkName: "Atomic Design As A Migration Strategy",
        talkAbstract: "Atomic design is well suited for migrating web applications. Because you build complexity out of simple components, you can start small and slowly carve out your application. I'd like to share how we're migrating 6 years of development at Buffer with Atomic Design.",
        twitterLink: "https://twitter.com/hjharnis",
        githubLink: "https://github.com/hharnisc",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: 'Harrison is a Senior Software Engineer at Buffer implementing the transition to a modern stack built on Node, React and Redux. He has had a role in migrating 3 large web applications and is an active open source contributor. In a past life he was a touring drummer in a band called "The Sweethearts Of The Rodeo".',
        specialClasses: ""
      },
      {
        picture: "url(assets/billy.jpg)",
        name: "Billy Roh",
        talkName: "Albers as a Millennial",
        talkAbstract: "What kind of art would Josef and Anni Albers have made if they were millennials? Come learn about how to make generative interactive art with the magic of JavaScript. The audience will learn about applying colour theory with HSL, composing and generating your own patterns with SVG, and creating a sense of depth with motion and interaction.",
        twitterLink: null,
        githubLink: "https://github.com/billyroh",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: 'Billy Roh is a product design lead at Opendoor. He helps organize a monthly meetup called WaffleJS in his spare time. Before Opendoor, he was a designer at Facebook.',
        specialClasses: ""
      },
      {
        picture: "url(assets/laurie.jpg)",
        name: "Laurie Voss",
        talkName: "Solving Imaginary Scaling Issues, at Scale",
        talkAbstract: "@ThePracticalDev on Twitter once created a fake book cover called 'Solving Imaginary Scaling Issues, at Scale'. I got carried away and came up with over 30 chapters for the book. This is a fast-paced, funny tour of the many silly things people do to solve scaling problems that don't exist, and genuine, practical advice on how to really scale, from the people who serve JavaScript developers over 2 billion downloads a week.",
        twitterLink: "https://twitter.com/seldo",
        githubLink: "https://github.com/seldo",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "I'm currently COO, formerly CTO of npm, Inc.. I have been building big, fast websites for 21 years and I want everybody in the world to be able to join me, because it's fun.",
        specialClasses: ""
      },
      {
        picture: "url(assets/lon.jpg)",
        name: "Lon Ingram",
        talkName: "Perfecting Perf: Rapid, Rigorous and Reproducible Performance Experiments",
        talkAbstract: "With the rise of the mobile web, speed has become crucial to success. Users won't wait around for slow-loading pages and search engines are now punishing sluggish sites. There's a wealth of ideas out there for cranking up performance, but how do you know where to start? What if you work for days to ship an optimization that doesn't really pay off? In this talk, you'll learn how to experiment and fail fast. You'll find out how to quickly and rigorously assess your optimization ideas with open source tools, and how to share your results so that others can replicate your findings.",
        twitterLink: "https://twitter.com/lawnsea",
        githubLink: "https://github.com/lawnsea",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Lon is a Principal UI Engineer at RetailMeNot. He is fascinated with applying ideas from systems research to the challenge of building cool complicated things on the web.",
        specialClasses: ""
      },
      {
        picture: "url(assets/myles.jpg)",
        name: "Myles Borins",
        talkName: "The True Cost of Unmoderated Collaboration: a story from the trenches",
        talkAbstract: "Is your project prepared to deal with toxic behavior? What is your plan of action when members of your community are being harassed? Without a clear code-of-conduct and moderation guidelines you will likely spend more time discussing what to do than moderating. In the time that your projects leaders have spent coming to consensus, your community members are being attacked. While an individual leaving a project due to harassment is fairly hard to ignore, it is not as clear how many individuals decide not to get involved to avoid harassment and negative attention.",
        twitterLink: "https://twitter.com/MylesBorins",
        githubLink: "https://github.com/MylesBorins",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Myles Borins is a developer, musician, artist, and maker He works for Google as a developer advocate serving the Node.js ecosystem He cares about the open web and healthy communities.",
        specialClasses: ""
      },
      {
        picture: "url(assets/hink.jpg)",
        name: "F. Hinkelmann",
        talkName: "JavaScript engines - how do they even?",
        talkAbstract: "Want to know how JavaScript engines work? Why is JavaScript so fast? What is just-in-time compilation? We'll look at basic and not-so-basic concepts of compilers, challenges posed by modern JavaScript, and what that means for performance. You'll learn how to write code that's fast and compiler-friendly.",
        twitterLink: "https://twitter.com/fhinkel",
        githubLink: "https://github.com/fhinkel",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Franziska has a Ph.D. in mathematics and is a software engineer on Google’s V8 team. She's an expert on ES6 performance and a Node.js core collaborator. When she's not working hard on making JavaScript and Node faster, she's out horseback riding.",
        specialClasses: ""
      },
    ]));

  }
});
