import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A([
      {
        name:        'Potch',
        linkId:      'potch',
        twitter:     'potch',
        gitHub:      'potch',
        avatar:      "public/assets/potch.jpg",
        description: [
          "Potch is a Web Developer Advocate at Mozilla. He's also the creator of http://unmaintained.tech, which encourages people to open source their software even when they don't have time to support it. When he's not building dashboards or making stickers, he's probably singing karaoke. Or singing in the car. Or shower.",
        ],
        talkName:        '10 Feet and Rising- Building television-friendly web pages',
        talkDescription: [
          'Every new device wants to be online, which brings us to a bold-but-old frontier—the TV. A series of challenges await us in the living room: How do I build a UI legible across a room? How do I interact with it? The constraints of even the tiniest screens taught us what we need to build for largest ones.',
        ]
      },
      {
        name:        'Rachel White',
        linkId:      'rachel-white',
        twitter:     'ohhoe',
        gitHub:      'rachelnicole',
        avatar:      "public/assets/rachel.jpg",
        description: [
          "Rachel is a self-taught Front End Engineer for IBM Watson. She is currently working on multiple video game projects, a VR cat cafe, and thinking about what IoT devices she can build for her two black cats. Her other interests include glitch art, 80s horror, and indie games.",
        ],
        talkName:        'JavaScript as Play',
        talkDescription: [
          "Now that you know enough frontend technologies to be dangerous, lets use those skills to make a game! We'll take a look at the open source framework Phaser to learn how to create your own browser based game. Together we'll explore topics such as sprite animation, collision detection, and scoring-- by the end we'll have a playable platformer you can tinker with.",
        ]
      },
      {
        name:        'Jenna Zeigen',
        linkId:      'jenna-zeigen',
        twitter:     'zeigenvector',
        gitHub:      'jennazee',
        avatar:      "public/assets/jenna.jpg",
        description: [
          "One morning, Jenna awoke to find that she had transformed into a programmer. She's been psyched about coding ever since. She's currently swimming with JavaScript at DigitalOcean as the Engineering Manager for the Community Engineering and Creative Engineering teams. When she's not teaching pixels to party or helping keep engineers happy, Jenna enjoys climbing, coffee, and cat gifs. Her best party trick is that she wrote the most serious academic paper of her life on puns",
        ],
        talkName:        'Server Farm to Table (or, how the Internet works)',
        talkDescription: [
          "Many of us depend on the internet for both work and play, but it's possible to go about our lives without knowing the steps it takes to get those pixels to show up and delight us and our users. However, a sense of this process can help us as developers write better software and understand the motivation behind many optimizations that we've been taught. This talk will cover the life of a web request in a browser, from entering the URL to the processing the HTML, covering DNS, TLS, TCP, HTTP, and HTML parsing and rendering, explaining how each step affects the performance of web apps.",
        ]
      },
      {
        name:        "Mike Taylor",
        linkId:      "mike-taylor",
        twitter:     "miketaylr",
        gitHub:      "miketaylr",
        avatar:      "public/assets/mike.png",
        description: [
          "Mike Taylor is a Web Compatibility Engineer at Mozilla. He works from home in Austin, TX. Once upon a time he worked at Opera Software as a Web Opener, whatever that means.",
        ],
        talkName:        "Doing the Unstuck: how to Make Browsers Compatible With Web JavaScript",
        talkDescription: [
          "What does it mean for JavaScript to be—or not to be—compatible with the web? And what does it mean for a browser vendor to be compatible with web JavaScript?",
          "In this talk, I'll discuss some of the issues that arise when browser vendors attempt to become backwards and forward compatible with the web, either by adding proposed language and standards features or removing ancient ones. Things can break in weird ways on the web—sometimes we need to hack the EcmaScript, DOM and CSSOM standards in similarly weird ways.",
        ]
      },
      {
        name:        "Suz Hinton",
        linkId:      "suz-hinton",
        twitter:     "noopkat",
        gitHub:      "noopkat",
        avatar:      "public/assets/suz.jpg",
        description: [
          "A cyborg kitty coder from the nerdiverse, Suz writes software for robotics, accessibility, and other interesting subjects. She has a passion for documentation, and sometimes rides the subway just for the thrill of it.",
        ],
        talkName:        "Single Page Access—The Road to Using our Power for Good",
        talkDescription: [
          "Building single page applications with front-end frameworks such as Ember, React, or Angular, can be very powerful. In some ways, the user experience is improved by using these frameworks. On the other hand, the single page paradigm commonly introduces some anti-patterns which prevent users from accessing and using your application.",
          "This talk will highlight some of the most impactful accessibility issues faced when developing single page applications, how to fix them, and we can set a better example for our industry going forward to improve access to rich web content for all.",
        ]
      },
      {
        name:        'Rebecca Murphey',
        linkId:      'rebecca-murphey',
        twitter:     'rmurphey',
        gitHub:      'rmurphey',
        avatar:      "public/assets/rebecca.jpg",
        description: [
          "Rebecca is a software engineer at Indeed, where she works on the front-end applications that power the world’s number one job site. She speaks frequently about front-end development, and writes at rmurphey.com. She lives in Austin, Texas with her partner and their son.",
        ],
        talkName:        'Making it better without making it over',
        talkDescription: [
          "Maybe you’re lucky enough to live in the world where everything you build is shiny and new, but there are an awful lot of people working onc lient-side apps that came into being back when yayQuery was a thing and Backbone wasn’t. In this talk, I'll share the story of how I started a new job this year by paying a visit to JavaScript circa 2009, back when Ryan Dahl was getting ready to announce Node and Facebook was still four years away from being mocked for the apparent heresy of JSX.",
          "I'll explain how I modernized and best-practice-ified a project that didn't even have a package.json, smoothing the development process, eliminating common sources of bugs, paving the way for bigger improvements, and never once uttering the words 'we oughta just start from scratch.'",
        ]
      },
      {
        name:        'Mark DiMarco',
        linkId:      'mark-dimarco',
        twitter:     'markmarkoh',
        gitHub:      'markmarkoh',
        avatar:      "public/assets/mark.jpg",
        description: [
          "Mark is a Senior Product Engineer at a startup in stealth mode called data.world based in Austin, TX. He writes & maintains a library called DataMaps for geographical data visualizations. His projects can be found here.",
        ],
        talkName: "What ever happened to those dinosaurs?",
        talkDescription: [
          'Asteroids and comets are among the Near Earth Objects that NASA is constantly monitoring, hoping to detect a future collision long before our planet is in danger. Mark DiMarco will show us how to scrape a the NASA website for free data and create an interactive data visualizations with D3 that shows close fly-bys of asteroids. In the process, we’ll learn a little bit about asteroids and a lot about data visualization with D3.'
        ],
      },
      {
        name:        'Jen Tong',
        linkId:      'jen-tong',
        twitter:     'MimmingCodes',
        gitHub:      'mimming',
        avatar:      "public/assets/jen.jpg",
        description: [
          "Jenny is a Developer Advocate on Cloud at Google. In this role she helps developers build cool stuff on all sorts of platforms. If she’s away from her laptop, she’s probably skating around a roller derby track, or hanging from aerial silk.",
        ],
        talkName: 'IoT Prototyping with Firebase and JavaScript',
        talkDescription: [
          "Everyone seems to be talking about the Internet of Things. From houseplants to ice machines, from fitness bracelets to fish tanks: it’s all fair game.",
          "Hardware hacking is a lot of fun, but it also brings new challenges. Early validation is critical. You need to be confident that your plan is going to work before you order a bunch of printed circuit boards.",
          "In this talk Jen Tong, a Developer Advocate at Google, will show you how Node.js, Firebase, and development boards come together to make your IoT project real. This talk will include live electronics hacking, and live coding.",
        ]
      },
      {
        name:        "Evan Morikawa",
        linkId:      "evan-morikawa",
        twitter:     "E0M",
        gitHub:      "emorikawa",
        avatar:      "public/assets/evan.jpg",
        description: [
          "Evan Morikawa is an engineer at Nylas building the email client, N1. Before Nylas, Evan was CTO at Proximate, an events & social network analysis company, and was a Techstars dev in residence. He splits his time between NYC and San Francisco and enjoys reviewing his Moves geo-tracking data to find a new places to explore next.",
        ],
        talkName: "The Age of the Javascript-Powered Desktop",
        talkDescription: [
          "It’s time for JavaScript developers to start building the Mac, Windows, and Linux applications people spend their entire working day using. Modern tools like Electron, Node, and the latest ECMA/W3C specs are making it possible to easily build highly performant, native-feeling desktop apps. This talk is about how to use these tools to build desktop apps, lessons & patterns from our experience building an open source desktop email client called N1, and why we’re entering the age of the javascript-powered desktop.",
        ]
      },
      {
        name:        "Joanne Cheng",
        linkId:      "joanne-cheng",
        twitter:     "joannecheng",
        gitHub:      "joannecheng",
        avatar:      "public/assets/joanne.jpg",
        description: [
          "Joanne is a JavaScript developer for Keen IO.",
        ],
        talkName: "WebGL",
        talkDescription: [
          "WebGL is a way of rendering graphics using the GPU that allows us to display complex graphics right in the browser. WebGL is often associated with experimental interactive art and games, however, it's currently being used in exciting ways in more common web applications. In this talk, we'll walk through the overall WebGL architecture and explore innovative projects using this technology. We'll then create a few basic WebGL examples to get our feet wet, with the help of Three.js, a popular library around WebGL.",
        ]
      }
    ]);
  }
});
