import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.set('talks', [
      { time: "8.00AM - 9.00AM",
        title: "Breakfast and Registration",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      { time: "9.00AM - 9.30AM",
        title: "Get Your Head Outta the Cloud – Let’s Talk Tech",
        speaker: "Jeremy Foster",
        description: "You live, breath, and think JavaScript. It’s because you have a propeller brain. It’s great. You’re solving the world’s problems one node module at a time. You’re making work more productive and our personal lives more streamline. But, although I know it's heretical, there's more to life than the freaking code! So let’s have some high-level banter about the state of tech, the future of tech, and your place in the whole thing as a developer. I offer alt perspective, mild humor, inspiring life pro tips, and absolutely no cat gifs.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "9.30AM - 10.00AM",
        title: "JavaScript Engines: How Do They Even?",
        speaker: "F. Hinkelmann",
        description: "Want to know how JavaScript engines work? Why is JavaScript so fast? What is just-in-time compilation? We'll look at basic and not-so-basic concepts of compilers, challenges posed by modern JavaScript, and what that means for performance. You'll learn how to write code that's fast and compiler-friendly.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "10.00AM - 10.30AM",
        title: "Making the Jump: How Desktop Era Frameworks can Thrive on Mobile",
        speaker: "Tom Dale",
        description: "Today’s most popular frameworks come from a time when the world was a different place. Ember’s first rendering engine, for example, was optimized around the performance gotchas of Internet Explorer 6. IE6 has since faded into history, and smartphones with spotty connectivity and occasionally dodgy hardware have become the lowest common denominator that we must optimize for. In this talk, we’ll discuss how smartphones fundamentally change the assumptions we make about architecting applications for the web. Then, we’ll cover how we can embrace these new mobile constraints to build even better apps—for everyone. Finally, we’ll look at the techniques used by desktop-era libraries and what they’re doing to become great for the mobile web.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "10.30AM - 11.00AM",
        title: "Break",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      { time: "11.00AM - 11.30AM",
        title: "Perfecting Perf: Rapid, Rigorous and Reproducible Performance Experiments",
        speaker: "Lon Ingram",
        description: "With the rise of the mobile web, speed has become crucial to success. Users won't wait around for slow-loading pages and search engines are now punishing sluggish sites. There's a wealth of ideas out there for cranking up performance, but how do you know where to start? What if you work for days to ship an optimization that doesn't really pay off? In this talk, you'll learn how to experiment and fail fast. You'll find out how to quickly and rigorously assess your optimization ideas with open source tools, and how to share your results so that others can replicate your findings.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "11.30AM - 12.00PM",
        title: "Solving Imaginary Scaling Issues, at Scale",
        speaker: "Laurie Voss",
        description: "@ThePracticalDev on Twitter once created a fake book cover called 'Solving Imaginary Scaling Issues, at Scale'. I got carried away and came up with over 30 chapters for the book. This is a fast-paced, funny tour of the many silly things people do to solve scaling problems that don't exist, and genuine, practical advice on how to really scale, from the people who serve JavaScript developers over 2 billion downloads a week.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "12.00PM - 12.30PM",
        title: "Emoji, Web Components, and Art",
        speaker: "Monica Dinulescu",
        description: "Making art on the web is easy, if you got the right tools. HTML has styled divs. JavaScript has canvas. I have an emoji keyboard. But what if our tools were better, and making art was easier? What if there was a magical widget that transformed any word into emoji word art? Or an image into pixels, which you can then style with CSS? What if it was easy to build these tools, embed them on any sites, and give them out to people, so that they can make art? Spoilers: it is, and I’m going to tell you about it.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "12.30PM - 1.45PM",
        title: "Lunch",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      { time: "1.45PM - 2.15PM",
        title: "One Day We Will All Be Front End Developers",
        speaker: "Micah Adams",
        description: "Front end development skills are becoming more essential as organizations continue to leverage platforms and infrastructures as services. This talk seeks to give developers with various levels of experience a perspective on where we have come so far, where we are going, and tools to navigate the new front end ecosystem.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "2.15PM - 2.45PM",
        title: "Atomic Design as a Migration Strategy",
        speaker: "Harrison Harnisch",
        description: "Atomic design is well suited for migrating web applications. Because you build complexity out of simple components, you can start small and slowly carve out your application. I'd like to share how we're migrating 6 years of development at Buffer with Atomic Design.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "2.45PM - 3.15PM",
        title: "Break",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      { time: "3.15PM - 3.45PM",
        title: "Albers as a Millenial",
        speaker: "Billy Roh",
        description: "What kind of art would Josef and Anni Albers have made if they were millennials? Come learn about how to make generative interactive art with the magic of JavaScript. The audience will learn about applying colour theory with HSL, composing and generating your own patterns with SVG, and creating a sense of depth with motion and interaction.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "3.45PM - 4.15PM",
        title: "Conversational ULS: Talking to Siri, Alexa, and Your Web Browser",
        speaker: "Scott Davis",
        description: "A typical user experience these days moves seamlessly between smartphones, tablets, laptops, and even smart TVs without us even thinking about it. But what if there is no screen? What if your User Interface is talking to your wrist, or talking to thin air as you walk into a room? Gartner predicts that 30% of all interactions with computers will be done with your voice by 2020. In this talk, [REDACTED] helps break down what Conversational UIs are, and how you can adopt them in your application.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "4.15PM - 4.35PM",
        title: "Break",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      { time: "4.35PM - 4.45PM",
        title: "About Workshops",
        speaker: "Steve Kinney",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      { time: "4.45PM - 5.15PM",
        title: "The True Cost of Unmoderated Collaboration: A Story from the Trenches",
        speaker: "Myles Borins",
        description: "Is your project prepared to deal with toxic behavior? What is your plan of action when members of your community are being harassed? Without a clear code-of-conduct and moderation guidelines you will likely spend more time discussing what to do than moderating. In the time that your projects leaders have spent coming to consensus, your community members are being attacked. While an individual leaving a project due to harassment is fairly hard to ignore, it is not as clear how many individuals decide not to get involved to avoid harassment and negative attention.",
        hasToggle: true,
        icon: 'talk'
      },
      { time: "5.15PM - 5.30PM",
        title: "Closing Notes",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'talk'
      },
    ]);

    controller.set('workshops', [
      {
        time: "9:00 AM - 11:00 AM",
        title: "Warning: May Cause Side Effects. How to Implement Redux Sagas as Middleware",
        speaker: "Brenna Martenson",
        description: "Redux has become the new hot tamale in making state management hurt less. Using pure functions called actions and reducers, Redux allows us to bridge the gap from a specific React component to that universal state. Although this has made front-end life easier, a remaining challenge is how to handle the events that need to happen in between the action and reducer. In this workshop we will talk about how Redux Sagas have stepped in to organize that stage of development using ES6 Generator functions.",
        hasToggle: true,
        icon: 'workshop'
      },
      {
        time: "9:00 AM - 11:00 AM",
        title: "Accessibility: The Basics and Beyond",
        speaker: "Brian Sinclair",
        description: "A lot of people talk about accessibility, but it's a very broad topic. Where does one even begin? In this workshop, we'll take a trip through the Web Content Accessibility Guidelines and talk about the most common places where applications fail to meet the standard. We'll also look at how quick and easy it is to take care of a lot of low-hanging fruit, as well as discuss some of the more complex aspects of what it means to be accessible.",
        hasToggle: true,
        icon: 'workshop'
      },
      {
        time: "9:00 AM - 12:00 PM",
        title: "Machine Learning for Beginners",
        speaker: "Rachel White",
        description: "If you've ever wondered what cat you would be, you're in luck. Using Microsoft's Cognitive services Emotion Analysis API, we'll build a quick and easy to use node application that will analyze your selfies and let you know what purrfect feline suits your mood. Don't like cats? That's cool, swap out for your animal of choice.",
        hasToggle: true,
        icon: 'workshop'
      },
      {
        time: "9:00 AM - 12:00 PM",
        title: "Design for Developers (Or, How to Make Your Application Not Look Like Garbage)",
        speaker: "Louisa Barrett",
        description: "We've all seen what can happen when design gets left by the wayside during product development: a great idea, a squeaky clean codebase, a bizarre interface, and users abandoning it when they can't figure out how (or why) to use it. If you're in this situation, don't despair! There is a light at the end of the garbagey-UI tunnel: you can avoid these user-centric pitfalls even when you're strapped for cash, short on time, and without the budget to bring on a designer. In this workshop we'll update your skills toolkit to include the design and UX foundations that will give you the most bang for your buck and help you make your product sing.",
        hasToggle: true,
        icon: 'workshop'
      },
      {
        time: "9:00 AM - 12:00 PM",
        title: "Finding & Fixing All The Broken Things: An Uncomfortably Close Look at Chrome Developer Tools",
        speaker: "Brittany Storoz",
        description: "Let's be real. Code is broken way more often than it's working. That's why we have dev tools. But how useful they are is entirely dependent on how well we understand them. In this workshop we'll take a look at some of the more advanced features of Chrome Canary's developer tools. We'll explore some of the lesser known functionality, play around with experimental features, and learn how extending dev tools can help us better understand our applications.",
        hasToggle: true,
        icon: 'workshop'
      },
      {
        time: "9:00 AM - 1:00 PM",
        title: "IoT and Serverless",
        speaker: "Kas Perch",
        description: "You've seen NodeBots, but how do you build systems with NodeBots? What systems would you build? In this workshop, we'll take a deeper dive into NodeBots (but we'll cover the basics in case you're new or it's been awhile). We'll talk about why serverless and IoT are best buddies, and discuss why and how you'd build a system of NodeBots devices.",
        hasToggle: true,
        icon: 'workshop'
      },
      {
        time: "11:30 AM - 1:00 PM",
        title: "Functional Programming with ClojureScript",
        speaker: "Marla Brizel",
        description: "Tired of fighting with state? (Don't worry, we all are.) Are you interested in learning the ins and outs of functional programming? Want to learn a new language to expand your horizons? Come learn how to write for the browser using ClojureScript—a Lisp-inspired language that compiles down to JavaScript and offers interoperability with browser APIs and existing client-side libraries. In this workshop, you'll learn how to write useful code in a functional language and how to apply these same concepts to your vanilla JavaScript.",
        hasToggle: true,
        icon: 'workshop'
      },
      {
        time: "1:00 PM - 3:00 PM",
        title: "Vue, I See You! Learning How to Build User Interfaces with a Progressive Framework",
        speaker: "Regis Boudinot",
        description: "Vue.js is a small progressive framework that is growing in popularity and in use! It is a nice mix of React and Angular (from a top level approach) and allows for a fun and fast development experience. It can also be incrementally adopted into existing codebases. This workshop will cover how to use the vue-cli and how to get a simple todo app running from scratch. I will cover how to use the reactive state Vue provides and live code with all of you so you can ask questions as I go along and we can learn together! I will also show examples of Vue in the wild (at GitLab) and how we have incrementally adopted it into our codebase.",
        hasToggle: true,
        icon: 'workshop'
      },
      {
        time: "1:00 PM - 3:30 PM",
        title: "Build A Safety “Net”: Intersectional & Inclusive Standards for Developers",
        speaker: "Patricia Realini",
        description: "Give a developer a readable code and they can code for a day, teach a developer best practices and coding standards and they can be a valuable addition to any engineering team. But just as we depend on code standards so that we can all work in a shared codebase, we need a standard for psychological safety on our engineering teams, especially when it comes to underrepresented minorities. In this workshop we will break down our unconscious biases, learn how to level up from allies to accomplices, and practice techniques for building an intersectional support system so that our teams can be just as performant as our code.",
        hasToggle: true,
        icon: 'workshop'
      },
      {
        time: "1:00 PM - 4:00 PM",
        title: "TypeScript in Practice",
        speaker: "Bryan Hughes",
        description: "Are you interested in TypeScript, but not sure where to start? Like most modern web development, it can feel like there are too many options and no obvious answers. This workshop will teach you all about TypeScript, and how to use it in practice. We'll walk through creating a small Node.js express app and a small React web app, all written in TypeScript. We'll also walk through setting up a build pipeline, and effectively debugging TypeScript code on the server and in the browser.",
        hasToggle: true,
        icon: 'workshop'
      },
    ]);
  }
});
