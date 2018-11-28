import Ember from 'ember';

const { Route, A } = Ember;

export default Route.extend({
  setupController(controller) {
    controller.set(
      'speakers',
      A([
        {
          picture:
            'url(https://gallery.mailchimp.com/50315fee4889ecfe0c9a664cd/images/f12f0ea8-3939-4b23-a0cf-a6b70d4314f0.png)',
          name: 'Emily Morehouse',
          talkName:
            'What To Expect When You’re Expecting: A Guide to Regression Testing',
          talkAbstract:
            'We all know we should be testing our applications, but testing is hard and great testing is even harder. Brush off your knowledge of different types of testing to hone in on exactly what you should test in your applications, and explore different approaches you can take in doing so. Take a deep dive into regression testing with a focus on visual regressions, and figure out what you should put in that expect() statement. Learn how to leverage modern headless browser libraries and automated diff-ing to get (and keep) pixel-perfect apps.',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Speaker',
          isKeynote: false,
          bio:
            "Emily Morehouse-Valcarcel is the Director of Engineering at Cuttlesoft, a digital product agency focused on creating beautifully designed software. Her passion is driven by a blend of empathy, strategy, curiosity, and human-centered design. She's an avid OSS contributor and constant learner focused on building tools to automate the mundane and shed light on the complexity of the human experience. Emily holds degrees in Computer Science, Criminology, and Theatre from Florida State University.",
          specialClasses: '',
        },
        {
          picture:
            'url(https://pbs.twimg.com/profile_images/821131399386267650/UdtdTb2H_400x400.jpg)',
          name: 'Juan Pablo Buriticá',
          talkName: 'Power, Influence and Authority in Engineering Leadership',
          talkAbstract:
            "Leadership opportunities are available at all levels of an organization, but some are more evident or clearly defined than others. Helping an organization achieve its goals may require us to step up as engineering leaders. As individual contributors, we may be able to support our team in negotiating the scope of a feature, facilitating a meeting or looking into that part of our codebase everyone shies away from. How about improving processes, helping define the culture or even the career journey of an organization? Do we need to be managers to have explicit authority to be agents of change? Maybe ... or maybe not.\nThis talk explores different challenges that engineering teams have through the lens of power, influence or authority from the perspective of engineers or managers. If you've ever wondered if you should step into management, this talk can give you some insight into the right tool or role needed to be an agent for positive change. After this talk, you should have a better idea of whether making the management career change can give you the tools you need to grow and help others in the process.",
          twitterLink: 'https://twitter.com/buritica',
          githubLink: 'https://github.com/buritica',
          linkedInLink: '',
          type: 'Keynote',
          isKeynote: false,
          bio:
            'Juan Pablo Buriticá is the VP of Engineering at splice.com where he leads and serves an engineering team throughout North and South America, with the mission of building the creative hub for the modern musician. Juan Pablo has built effective software engineering organizations by emphasizing Open Source software values, technical excellence, trust, and empathy. He has also organized more than 10 software engineering conferences in the US & Latin-America, founded multiple JavaScript meetups, and led the growth of Colombia’s JavaScript community, now one of the largest Spanish-speaking JS communities in the world. His favorite food group is empanadas.',
          specialClasses: '',
        },
        {
          picture:
            'url(https://pbs.twimg.com/profile_images/898317681199259648/BfY1lAY4_400x400.jpg)',
          name: 'Jennifer Wong',
          talkName: 'Empathetic Design Systems<br>',
          talkAbstract:
            'How do you make a design system empathetic and whom should it be empathetic towards? At Eventbrite, we decided to replace our outdated styleguide with a newfangled design system from scratch. We made a great start.. But we forgot about a11y, fellow engineers, and our coworkers from Product, Design, and more. Slow dev time, changing designs, and new technology caused growing pains. So what did we learn in our first iteration? How did empathy help shape our ever-changing, morphing design system? Come learn how to build an empathetic design system from the ground up or start empathizing today!',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Speaker',
          isKeynote: false,
          bio:
            'Jennifer Wong is a self-taught software engineer who spends her days making the web a prettier and more user-friendly place. She has written for Net Magazine and had projects covered by Mashable, Engadget, Gizmodo, and more. Jenn is an avid conference speaker and loves eating, coding, and sleeping.',
          specialClasses: '',
        },
        {
          picture: 'url(http://i.germanforblack.com/me.jpg)',
          name: 'Ben Schwarz',
          talkName:
            'The Critical Request: An investigation into what blocks render',
          talkAbstract:
            'Serving a website seems pretty simple: send some HTML, the browser figures out what resources to load next. Then we wait patiently for the page to be ready. However, browsers are complex and without a firm grasp on how resources are prioritized, fetched and rendered we’re needlessly penalising our customers with serious performance repercussions. In this talk we’ll study how browsers determine which requests should be made, in what order, and what prevents the browser from rendering content as quickly as about:blank.',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Speaker',
          isKeynote: false,
          bio:
            'Ben is the founder of Calibre, a company dedicated to making the web faster for everyone.',
          specialClasses: '',
        },
        {
          picture:
            'url(https://media.licdn.com/dms/image/C4E03AQH2kwFCQGZZAg/profile-displayphoto-shrink_800_800/0?e=1531353600&v=beta&t=OOz4HwXHgdQz1TT-dhk6U4xspCjyRGsDT0sWu2Y3cIg)',
          name: 'Naina Raisinghani',
          talkName:
            'Houdini - how you too can write a browser rendering engine!',
          talkAbstract: '',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Speaker',
          isKeynote: false,
          bio:
            "Developers have been playing a larger part in standards bodies that define CSS primitives. However, no matter how involved & excited developers get excited about a particular CSS feature, they usually can't use it because it doesn't get full simultaneous support across all browsers. Or, worse, features are supported in all browsers, but the support is buggy, inconsistent or even completely incompatible. This is where Houdini comes in. It solves this problem by introducing a new set of APIs that gives developers the power to extend CSS itself.",
          specialClasses: '',
        },
        {
          picture: 'url(https://spectrum.ieee.org/image/MzAwOTIwMg.jpeg)',
          name: 'Max Bittker',
          talkName: "How to Program Your GPU (and Not Do It Alone)",
          talkAbstract:
            'Intrigued by WebGL? Don\'t go at it alone! Leverage the bundling tool glslify to get your pixels flowing. I\'ll introduce you to glslify and its ecosystem of friendly micro-libraries for the GPU that will empower you to learn graphics programming and build things that will make people on the internet say "neat". Pick up the tools you need to soar beyond "hello world".',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Speaker',
          isKeynote: false,
          bio:
            'Max builds weird interactive systems out of and pixels and unicode strings by night, and fixes bugs in tools that help developers fix bugs at Sentry by day.',
          specialClasses: '',
        },
        {
          picture:
            'url(https://en.gravatar.com/userimage/22855736/69e1e051aeb33103f03b20aef026f398.jpg?size=800)',
          name: 'Jay Phelps',
          talkName: "Help me WebAssembly, you're my only hope!",
          talkAbstract:
            "WebAssembly (aka wasm) is a new, standardized compilation target for the web, shipping in all modern browsers. But since it's so low level it can be difficult to see how it will revolutionize the next generation of web apps–and definitely not just games and C++! In this talk, Jay   reveal what it is, how you can use it today, and the incredible opportunities it will unlock in the years to come on both the Web and on Desktop.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Speaker',
          isKeynote: false,
          bio:
            'Reactive programming nut and compiler enthusiast. Jay is the Chief Software Architect at This Dot, where they provide support, training, mentoring, and software design. Previously a Senior Software Engineer at Netflix. Lover of all things open source, his contributions span numerous ecosystems. RxJS core team member and author of core-decorators, git-blame-someone-else, and co-author of redux-observable.',
          specialClasses: '',
        },
        {
          picture:
            'url(https://avatars1.githubusercontent.com/u/183799?s=400&v=4)',
          name: 'Chad Hietala',
          talkName: 'Compilers: The New Frontier In Web Performance',
          talkAbstract:
            'Web Developers have been reliant on compilers for the better part of a decade. But what actually is a compiler? Why are they are they important? How do compilers fit in with emergence of WebAssembly? This talk will look at how this fundamental building block will unlock the next evolution of web performance.',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Speaker',
          isKeynote: false,
          bio:
            'Senior Staff Engineer at LinkedIn working on JavaScript infrastructure. Part of the Ember Core Team.',
          specialClasses: '',
        },
        {
          picture: 'url(//formidable.com/static/Chris-1.41c869a2.jpg)',
          name: 'Chris Bolin',
          talkName:
            'Bridging the Disconnect: Making Software to Make a Statement',
          talkAbstract:
            'A few months ago I accidentally went viral. I wanted others to rethink their online lives, so I made a website that forced viewers to disconnect from the internet before reading. The site struck a nerve, and I learned a lot from the ensuing hype and inevitable trolls. This talk explores those lessons, along with the technologies that enabled the project. As developers and designers we have a special privilege and responsibility. In our increasingly digital world, we have the power to create; we can make software that questions norms and provides new answers.',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Speaker',
          isKeynote: false,
          bio:
            'Chris is a software engineer and artist in Denver. He makes user interfaces at Formidable and is the founding editor of The Disconnect.',
          specialClasses: '',
        },
        {
          picture:
            'url(https://pbs.twimg.com/profile_images/971608744156053505/IWBH3oFM_400x400.jpg)',
          name: 'Madison Kerndt',
          talkName:
            'Maps, Monads, and Pure Functions: Functional Programming for Beginners </br>( with Emily Freeman )',
          talkAbstract:
            'We’ve all met that one dev who’s absolutely obsessed with “pure functions” and throws around the word “lambda” like anyone knows what the heck he’s talking about. If you don’t have a degree in applied mathematics, FP is intimidating. No, terrifying. But here’s the thing — once you get past the fancy words, it’s really quite simple. And, after you recover from your mind being blown, you’ll find yourself with an entirely new set of technical tools. This workshop is advanced programming for beginners. We’ll make FP approachable and walk you through how to build a functional program in JS.',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio:
            'Madison is on a mission to help developers build secure software and to make the digital world a safer place for everyone. She is a Developer Evangelist and Software Engineer at IronCore Labs, makers of turnkey data security solutions for developers and empowers Enterprises to control their data wherever it lives. Madison has deep roots in the startup community and has worked with multiple startups as a front-end developer, designer, and marketer. She enjoys building, creating, teaching, and con',
          specialClasses: '',
        },
        {
          picture:
            'url(https://pbs.twimg.com/profile_images/970852530711228417/MaOE-b6h_400x400.jpg)',
          name: 'Emily Freeman',
          talkName:
            'Maps, Monads, and Pure Functions: Functional Programming for Beginners </br>( with Madison Kerndt )',
          talkAbstract:
            'We’ve all met that one dev who’s absolutely obsessed with “pure functions” and throws around the word “lambda” like anyone knows what the heck he’s talking about. If you don’t have a degree in applied mathematics, FP is intimidating. No, terrifying. But here’s the thing — once you get past the fancy words, it’s really quite simple. And, after you recover from your mind being blown, you’ll find yourself with an entirely new set of technical tools. This workshop is advanced programming for beginners. We’ll make FP approachable and walk you through how to build a functional program in JS.',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio:
            'After many years of ghostwriting, Emily Freeman made the bold (insane?!) choice to switch careers into software engineering. Emily is the curator of JavaScript January. She works as a developer advocate for Kickbox and lives in Denver, Colorado.',
          specialClasses: '',
        },
        {
          picture:
            'url(https://camo.githubusercontent.com/f717356337380e5f38accea1e142be6d976deee0/68747470733a2f2f7062732e7477696d672e636f6d2f70726f66696c655f696d616765732f3939373333333537363032393939393130342f705443665a5238715f343030783430302e6a7067)',
          name: 'Leta Keane',
          talkName: 'CSS Grid',
          talkAbstract:
            "One of the newest editions to the CSS family, Grid is a powerful way to lay out 2D page elements. Whether you're an interested CSS Grid rookie or a Flexbox master suspicious of this new kid on the responsive block, this workshop will give you the tools you need so you can begin creating flexible, controlled layouts!",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: '',
          specialClasses: '',
        },
        {
          picture:
            'url(https://camo.githubusercontent.com/d68016f7759c98963d5e696c9cf63be1be186fc6/68747470733a2f2f7062732e7477696d672e636f6d2f70726f66696c655f696d616765732f3937353830373937313534333437343137382f496b4b31706b384b5f343030783430302e6a7067)',
          name: 'Jhun de Andres',
          talkName: 'Code Splitting 101',
          talkAbstract:
            "<p>It's 2018 and we have mobile CSS, mobile HTML, but for some reason there's no 'mobile' JavaScript. Thankfully with ES6's dynamic imports, we can lazy load our components and drastically cut down the initial load time of our applications. In this workshop you'll learn how to use ES6 dynamic imports to help split your code bundle and test it (because it's 2018).</p><p>This workshop is for everyone! You’ll get the most out of this session if you’ve written a little bit of React before and know how to test, but those aren’t prerequisites. You’ll get all the concepts, tools, and context needed via code examples.</p>You can expect material on ES6 JavaScript, mocking and stubbing functions inside of a testing environment, and really great gifs to drive some of these abstract points home. You’ll leave empowered and excited to start splitting up your code!",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: '',
          specialClasses: '',
        },
        {
          picture:
            'url(https://camo.githubusercontent.com/02f63133cd7fe57afde2bbe0ceec065ef4fdf27c/68747470733a2f2f7062732e7477696d672e636f6d2f70726f66696c655f696d616765732f3832363134393736343937343730323539372f50322d33684e6e625f343030783430302e6a7067)',
          name: 'Bryan Hughes',
          talkName: 'Node.js Serverless Design and Best Practices',
          talkAbstract:
            'Serverless is taking the backend world by storm, and for good reason. It promises infinite scalability and never having to manage a server again. Serverless mostly achieves these goals the same way that functional programming does. You define inputs and outputs without using state...and state is what makes scaling hard.   Much like functional programming though, being productive in serverless requires a tricky shift in mindset. This workshop will walk you through creating a serverless application with Node.js, teach you best practices, and teach you how to think serverless.   Note: We will be using Azure Functions for this workshop and we will provide you with Azure credit.',
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: "Bryan Hughes is a technical evangelist at Microsoft and long-time member of the Node.js and NodeBots communities. Bryan is the creator of Raspi IO which provides Raspberry Pi support for the Johnny-Five JavaScript robotics library. Bryan also created Raver Lights, a distributed wireless lighting system designed for festivals, and Request Inspector, a Node.js performance diagnostics tool. Outside of tech, Bryan is an amateur photographer, occasional writer, a once upon a time pianist, and a wine aficionado.",
          specialClasses: '',
        },
        {
          picture: 'url(https://pbs.twimg.com/profile_images/996969388887556097/FFUL4pQL_400x400.jpg)',
          name: 'Alan Smith',
          talkName: 'Building a Component Library',
          talkAbstract:
            "This workshop is designed to provide an understanding of the principles and process of building a component library in React. Together we'll build a library of several small components that can be imported and reused in any React application. By the end of the workshop you should be able to: develop extensible components, organize components in a highly-reusable structure, test and document components effectively, and publish and version your library. We'll build a small library of components leading up to a final inline-editable field. We'll start by building the smallest elements and put them all together at the end.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: 'Alan is an engineer, designer, writer, & artist based out of Colorado.',
          specialClasses: '',
        },
        {
          picture: 'url(https://pbs.twimg.com/profile_images/958065530744684544/j1SkkHPc_400x400.jpg)',
          name: 'Will Klein',
          talkName: 'How Linters, Compilers, and Other Cool Things Work',
          talkAbstract:
            "Let’s demystify the secrets of modern JavaScript tooling. In this workshop, you will: learn how linters, compilers, and code transforms work, write your own ESLint and Babel plugins, learn when to apply these skills to help your team, and deepen your understanding of computer languages. The only prerequisites are an intermediate grasp of JavaScript and a desire to learn how stuff works.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: 'Will is a full stack engineer at Workday and co-organizes the React Denver meetup. He loves sharing what he can with the community, whether its organizing events, giving talks, or mentoring others. He is proud to be a father and husband, and lives on a healthy diet of coffee and ice cream in Longmont, Colorado.',
          specialClasses: '',
        },
        {
          picture: 'url(https://avatars2.githubusercontent.com/u/10555255?s=400&v=4)',
          name: 'Lovisa Svallignson',
          talkName: 'Kubernetes for JS App developers',
          talkAbstract:
            "Running your own projects on the latest infrastructure tools even if you don’t identify as an ops engineer is becoming easier and easier. Kubernetes has been a major force in the container orchestration space ever since its v1 was released three years ago. Kubernetes maintainers and contributors alike agree that the tool should be accessible and easy to use for all engineers, not only ops folks. In this workshop we’ll take a look at the basics of containers and container orchestrators, learn about Kubernetes and what makes it special, and we’ll deploy a JavaScript application to a Kubernetes cluster.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: 'Lovisa writes code for a living, watches wrestling on dailymotion, cooks food in her own kitchen.',
          specialClasses: '',
        },
        {
          picture: 'url(https://avatars2.githubusercontent.com/u/2089432?s=400&v=4)',
          name: 'István Szmozsánszky',
          talkName: 'Clouduboy: Create JS Games For Microcontrollers',
          talkAbstract:
            "Explore, tinker, play: Learn how to create your very own retro pixelart games for the Arduboy, a tiny Arduino-based pocket-sized game console reminiscent of Gameboy's glory days. Best thing? Thanks to Clouduboy you can now do this entirely in your browser, all in JavaScript with the language and techniques you already know (and love)!",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: 'István (or Flaki, for short) is a JavaScript world-domination prophet, engineer & trainer from Budapest. He runs his own consulting business Skylark, is a Frontend Trainer @ DPC Consulting and a longtime Mozilla-contributor. He contributes to various open source projects like Firefox, Firefox OS, Rust, Servo and the Tessel Project. His favorite topics include service workers, progressive webapps and JS on microcontrollers.',
          specialClasses: '',
        },
        {
          picture: 'url(https://pbs.twimg.com/profile_images/987831937103515648/lTZ107TE_400x400.jpg)',
          name: 'Jenn Schiffer',
          talkName: 'Getting Started with Glitch',
          talkAbstract:
            "Whether it’s beautiful digital art, handy tools to help you do your work, or a site for your project or cause, you’ll find things on Glitch that remind us the web can still be a fun, creative place full of unexpected surprises.<br><br> But Glitch isn’t an app store — it’s a creative community. We give you the most intuitive, magical tools for creating any app or website that you can imagine. Whether you’re an expert coder or have never written a line of code in your life, Glitch is for you. And it’s free!<br><br>If you see an app that you like, just jump in and try it out. If it’s not exactly what you want, or inspires you to create your own idea, just remix the app and tweak it to your heart’s content. We handle all the complicated parts of development, letting you focus on the fun part - building your idea.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: '',
          specialClasses: '',
        },
        {
          picture: 'url(https://pbs.twimg.com/profile_images/992435845750636545/q3CQc_oI_400x400.jpg)',
          name: 'Myles Borins',
          talkName: 'Serverless JavaScript in the Cloud with Google Cloud Platform',
          talkAbstract:
            "In this hands on workshop we will dig into all the things you can do with JavaScript and Google Cloud Platform. Where to run your code, best practices for microservices, and how to take advantage of the various serverless offerings. After this workshop you will have the tools you need to bring your mvp from vision to reality on GCP.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: '',
          specialClasses: '',
        },
        {
          picture: 'url(https://pbs.twimg.com/profile_images/496348912257478657/GJFDcKOx_400x400.png)',
          name: 'Romeeka Gayhart',
          talkName: 'Technical Writing for Developers',
          talkAbstract:
            "How do you communicate about your projects to the world and your fellow developers? If you work on a distributed team, open source or just want to avoid a full day of meetings  - you probably depend on written communication.<br><br> The good news is that there are well defined best practices in the field of technical writing that can help us.<br><br> Bring your READMEs, RFCs, reports, side projects and even your Github username and we’ll work together to combine the science of technical writing and the world of web development.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: '',
          specialClasses: '',
        },
        {
          picture: 'url(https://media.licdn.com/dms/image/C5603AQEm6Lydg9hjeQ/profile-displayphoto-shrink_200_200/0?e=1529514000&v=beta&t=xwLC2r9J5U155e4mX9vsk7IfK2AWN2TIH0U2oPtJINM)',
          name: 'Melissa Wagasky',
          talkName: 'Fastest Progessive Web App (PWA) in the West',
          talkAbstract:
            "A few years ago, pundits were trumpeting the demise of the mobile web. Apps had won the day. In retrospect, that announcement hasn’t aged well. The mobile web is alive and well. Progressive Web Applications (PWA) provide native qualities with the ease of access and distribution of the web. But PWAs are not built on a single technology and it can be a bit tricky to wrap your head around a PWA is exactly.  It turns out, there are a bunch of technologies that go into building a PWA. In these 90 minutes we’ll turn a web app into a PWA and cover the important technologies for getting started with PWAs along the way.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: '',
          specialClasses: '',
        },
        {
          picture: 'url(https://pbs.twimg.com/profile_images/952225529100320768/HzL6kmHp_400x400.jpg)',
          name: 'Katie Scruggs',
          talkName: 'Introduction to React Native',
          talkAbstract:
            "Have you ever wanted to build mobile apps but didn't have the time to learn Java for Android and Objective C or Swift for iOS? React Native lets you build mobile apps using React! In this workshop, we'll build a mobile app that you can display in a simulator and view on your phone. We'll talk about the quirks of React Native vs React, how to style your components with style props, and how to navigate between mobile screens.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: 'Katie is an Integration Engineer at TrackVia',
          specialClasses: '',
        },
        {
          picture: 'url(https://pbs.twimg.com/profile_images/900416714747240449/lPTo6edb_400x400.jpg)',
          name: 'Chris Bolin (Again!)',
          talkName: 'Intermediate React',
          talkAbstract:
            "Take your React skills to the next level! We'll dive into three topics used in modern React applications: render props, the context API (new in React 16), and advanced forms (using Formik). You should already be familiar with React basics like JSX, components, and lifecycle methods.",
          twitterLink: '',
          githubLink: '',
          linkedInLink: '',
          type: 'Workshop',
          isKeynote: false,
          bio: '',
          specialClasses: '',
        }
      ]),
    );
  },
});
