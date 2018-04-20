import Ember from 'ember';

const { Route, A } = Ember;

export default Route.extend({
  setupController(controller) {
    controller.set('speakers', A([
      {
        picture: "url()",
        name: "Emily Morehouse",
        talkName: "What To Expect When You’re Expecting: A Guide to Regression Testing",
        talkAbstract: "We all know we should be testing our applications, but testing is hard and great testing is even harder. Brush off your knowledge of different types of testing to hone in on exactly what you should test in your applications, and explore different approaches you can take in doing so. Take a deep dive into regression testing with a focus on visual regressions, and figure out what you should put in that expect() statement. Learn how to leverage modern headless browser libraries and automated diff-ing to get (and keep) pixel-perfect apps.",
        twitterLink: "",
        githubLink: "",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Emily Morehouse-Valcarcel is the Director of Engineering at Cuttlesoft, a digital product agency focused on creating beautifully designed software. Her passion is driven by a blend of empathy, strategy, curiosity, and human-centered design. She's an avid OSS contributor and constant learner focused on building tools to automate the mundane and shed light on the complexity of the human experience. Emily holds degrees in Computer Science, Criminology, and Theatre from Florida State University.",
        specialClasses: ""
      },
      {
        picture: "url(http://gravatar.com/avatar/3994a1ac47c4a684d7378ef06c1571cd?s=400)",
        name: "Brian Holt",
        talkName: "Entangled Qubits: Quantum Computing with JavaScript",
        talkAbstract: "Qubits, entanglements, and superpositions, oh my! Coming is the great revolution of quantum computing and it’s going to change everything. We inch closer to this amazing breakthrough on a daily basis and we’re beginning as computer scientists to think through what quantum computing means for us as software engineers. Luckily for us as software engineers we too can harness the great power of quantum computing when it arrives. We’ll go through the basic units of quantum computing, the terminology, and sorts of problems it can deal with that we can’t deal with today. The future is now. Or soon.",
        twitterLink: "",
        githubLink: "",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Brian is currently working as a senior cloud developer advocate at Microsoft and he's all about developers, developers, developers. Previously he was a JavaScript engineer at Netflix, LinkedIn and Reddit. When not working, Brian finds time to teach on Frontend Masters, run his mouth on Front End Happy Hour, travel all over the world, and play with his adorable dog. Brian is currently a resident of Seattle, WA.",
        specialClasses: ""
      },
      {
        picture: "url(https://pbs.twimg.com/profile_images/898317681199259648/BfY1lAY4_400x400.jpg)",
        name: "Jennifer Wong",
        talkName: "Empathetic Design Systems",
        talkAbstract: "How do you make a design system empathetic and whom should it be empathetic towards? At Eventbrite, we decided to replace our outdated styleguide with a newfangled design system from scratch. We made a great start.. But we forgot about a11y, fellow engineers, and our coworkers from Product, Design, and more. Slow dev time, changing designs, and new technology caused growing pains. So what did we learn in our first iteration? How did empathy help shape our ever-changing, morphing design system? Come learn how to build an empathetic design system from the ground up or start empathizing today!",
        twitterLink: "",
        githubLink: "",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Jennifer Wong is a self-taught software engineer at Eventbrite where she spends her days making the web a prettier and more user-friendly place. She has written for Net Magazine and had projects covered by Mashable, Engadget, Gizmodo, and more. Jenn is an avid conference speaker and loves eating, coding, and sleeping.",
        specialClasses: ""
      },
      {
        picture: "url(http://i.germanforblack.com/me.jpg)",
        name: "Ben Schwarz",
        talkName: "The Critical Request: An investigation into what blocks render",
        talkAbstract: "Serving a website seems pretty simple: send some HTML, the browser figures out what resources to load next. Then we wait patiently for the page to be ready. However, browsers are complex and without a firm grasp on how resources are prioritized, fetched and rendered we’re needlessly penalising our customers with serious performance repercussions. In this talk we’ll study how browsers determine which requests should be made, in what order, and what prevents the browser from rendering content as quickly as about:blank.",
        twitterLink: "",
        githubLink: "",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Ben is the founder of Calibre, a company dedicated to making the web faster for everyone.",
        specialClasses: ""
      },
      {
        picture: "url(https://lh6.googleusercontent.com/sC71QcK5ZJn4kKv3P8yDlKFrXuOQQGrrDfXq3jCoYsdg6R0CXLKOkqpVamJVuFg2JwbTTuhSrBY7Uim3u14N=w1266-h1278-rw)",
        name: "Naina Raisinghani",
        talkName: "Houdini - how you too can write a browser rendering engine!",
        talkAbstract: "",
        twitterLink: "",
        githubLink: "",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Developers have been playing a larger part in standards bodies that define CSS primitives. However, no matter how involved & excited developers get excited about a particular CSS feature, they usually can't use it because it doesn't get full simultaneous support across all browsers. Or, worse, features are supported in all browsers, but the support is buggy, inconsistent or even completely incompatible. This is where Houdini comes in. It solves this problem by introducing a new set of APIs that gives developers the power to extend CSS itself.",
        specialClasses: ""
      },
      {
        picture: "url(https://spectrum.ieee.org/image/MzAwOTIwMg.jpeg)",
        name: "Max Bittker",
        talkName: "require('WebGL-magic') with glslify",
        talkAbstract: "Intrigued by WebGL? Don't go at it alone! Leverage the bundling tool glslify to get your pixels flowing. I'll introduce you to glslify and its ecosystem of friendly micro-libraries for the GPU that will empower you to learn graphics programming and build things that will make people on the internet say \"neat\". Pick up the tools you need to soar beyond \"hello world\".",
        twitterLink: "",
        githubLink: "",
        linkedInLink: "",
        type: "Speaker",
        isKeynote: false,
        bio: "Max builds weird interactive systems out of and pixels and unicode strings by night, and fixes bugs in tools that help developers fix bugs at Sentry by day.",
        specialClasses: ""
    },
    {
      picture: "url(https://en.gravatar.com/userimage/22855736/69e1e051aeb33103f03b20aef026f398.jpg?size=800)",
      name: "Jay Phelps",
      talkName: "Help me WebAssembly, you're my only hope!",
      talkAbstract: "WebAssembly (aka wasm) is a new, standardized compilation target for the web, shipping in all modern browsers. But since it's so low level it can be difficult to see how it will revolutionize the next generation of web apps–and definitely not just games and C++! In this talk, Jay will reveal what it is, how you can use it today, and the incredible opportunities it will unlock in the years to come on both the Web and on Desktop.",
      twitterLink: "",
      githubLink: "",
      linkedInLink: "",
      type: "Speaker",
      isKeynote: false,
      bio: "Reactive programming nut and compiler enthusiast. Jay is the Chief Software Architect at This Dot, where they provide support, training, mentoring, and software design. Previously a Senior Software Engineer at Netflix. Lover of all things open source, his contributions span numerous ecosystems. RxJS core team member and author of core-decorators, git-blame-someone-else, and co-author of redux-observable.",
      specialClasses: ""
    },
    {
      picture: "url(https://avatars1.githubusercontent.com/u/183799?s=400&v=4)",
      name: "Chad Hietala",
      talkName: "Compilers: The New Frontier In Web Performance",
      talkAbstract: "Web Developers have been reliant on compilers for the better part of a decade. But what actually is a compiler? Why are they are they important? How do compilers fit in with emergence of WebAssembly? This talk will look at how this fundamental building block will unlock the next evolution of web performance.",
      twitterLink: "",
      githubLink: "",
      linkedInLink: "",
      type: "Speaker",
      isKeynote: false,
      bio: "Senior Staff Engineer at LinkedIn working on JavaScript infrastructure. Part of the Ember Core Team.",
      specialClasses: ""
    },
    {
      picture: "url(//formidable.com/static/Chris-1.41c869a2.jpg)",
      name: "Chris Bolin",
      talkName: "Bridging the Disconnect: Making Software to Make a Statement",
      talkAbstract: "A few months ago I accidentally went viral. I wanted others to rethink their online lives, so I made a website that forced viewers to disconnect from the internet before reading. The site struck a nerve, and I learned a lot from the ensuing hype and inevitable trolls. This talk explores those lessons, along with the technologies that enabled the project. As developers and designers we have a special privilege and responsibility. In our increasingly digital world, we have the power to create; we can make software that questions norms and provides new answers.",
      twitterLink: "",
      githubLink: "",
      linkedInLink: "",
      type: "Speaker",
      isKeynote: false,
      bio: "Chris is a software engineer and artist in Denver. He makes user interfaces at Formidable and is the founding editor of The Disconnect.",
      specialClasses: ""
    },
    {
      picture: "url()",
      name: "Madison Kerndt",
      talkName: "Maps, Monads, and Pure Functions: Functional Programming for Beginners",
      talkAbstract: "We’ve all met that one dev who’s absolutely obsessed with “pure functions” and throws around the word “lambda” like anyone knows what the heck he’s talking about. If you don’t have a degree in applied mathematics, FP is intimidating. No, terrifying. But here’s the thing — once you get past the fancy words, it’s really quite simple. And, after you recover from your mind being blown, you’ll find yourself with an entirely new set of technical tools. This workshop is advanced programming for beginners. We’ll make FP approachable and walk you through how to build a functional program in JS.",
      twitterLink: "",
      githubLink: "",
      linkedInLink: "",
      type: "Speaker",
      isKeynote: false,
      bio: "Madison is on a mission to help developers build secure software and to make the digital world a safer place for everyone. She is a Developer Evangelist and Software Engineer at IronCore Labs, makers of turnkey data security solutions for developers and empowers Enterprises to control their data wherever it lives. Madison has deep roots in the startup community and has worked with multiple startups as a front-end developer, designer, and marketer. She enjoys building, creating, teaching, and con",
      specialClasses: ""
    },
    {
      picture: "url()",
      name: "Emily Freeman",
      talkName: "Maps, Monads, and Pure Functions: Functional Programming for Beginners",
      talkAbstract: "We’ve all met that one dev who’s absolutely obsessed with “pure functions” and throws around the word “lambda” like anyone knows what the heck he’s talking about. If you don’t have a degree in applied mathematics, FP is intimidating. No, terrifying. But here’s the thing — once you get past the fancy words, it’s really quite simple. And, after you recover from your mind being blown, you’ll find yourself with an entirely new set of technical tools. This workshop is advanced programming for beginners. We’ll make FP approachable and walk you through how to build a functional program in JS.",
      twitterLink: "",
      githubLink: "",
      linkedInLink: "",
      type: "Speaker",
      isKeynote: false,
      bio: "After many years of ghostwriting, Emily Freeman made the bold (insane?!) choice to switch careers into software engineering. Emily is the curator of JavaScript January. She works as a developer advocate for Kickbox and lives in Denver, Colorado. Madison is on a mission to help developers build secure software. She is a Developer Evangelist and Software Engineer at IronCore Labs. Madison has deep roots in the startup community and has worked as a front-end developer, designer and marketer.",
      specialClasses: ""
    },
    // 
    // {
    //   picture: "url()",
    //   name: "",
    //   talkName: "",
    //   talkAbstract: "",
    //   twitterLink: "",
    //   githubLink: "",
    //   linkedInLink: "",
    //   type: "Speaker",
    //   isKeynote: false,
    //   bio: "",
    //   specialClasses: ""
    // },
  ]))
  }
});
