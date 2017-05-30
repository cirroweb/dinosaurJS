import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.set('talks', [
      { time: "8.00AM - 9.00AM",
        title: "BREAKFAST AND REGISTRATION",
        speaker: "",
        description: "",
        hasToggle: false
      },
      { time: "9.00AM - 9.30AM",
        title: "UNKNOWN",
        speaker: "JEREMY FOSTER",
        description: "You live, breath, and think JavaScript. It’s because you have a propeller brain. It’s great. You’re solving the world’s problems one node module at a time. You’re making work more productive and our personal lives more streamline. But, although I know it's heretical, there's more to life than the freaking code! So let’s have some high-level banter about the state of tech, the future of tech, and your place in the whole thing as a developer. I offer alt perspective, mild humor, inspiring life pro tips, and absolutely no cat gifs.",
        hasToggle: true
      },
      { time: "10.00AM - 10.30AM",
        title: "MAKING THE JUMP: HOW DESTOP ERA FRAMEWORKS CAN THRIVE ON MOBILE",
        speaker: "TOM DALE",
        description: "Today’s most popular frameworks come from a time when the world was a different place. Ember’s first rendering engine, for example, was optimized around the performance gotchas of Internet Explorer 6. IE6 has since faded into history, and smartphones with spotty connectivity and occasionally dodgy hardware have become the lowest common denominator that we must optimize for. In this talk, we’ll discuss how smartphones fundamentally change the assumptions we make about architecting applications for the web. Then, we’ll cover how we can embrace these new mobile constraints to build even better apps—for everyone. Finally, we’ll look at the techniques used by desktop-era libraries and what they’re doing to become great for the mobile web.",
        hasToggle: true
      },
      { time: "10.30AM - 11.00AM",
        title: "BREAK",
        speaker: "MIKE & JUSTIN",
        description: "",
        hasToggle: false
      },
      { time: "11.00AM - 11.30AM",
        title: "PERFECTING PERF: RAPID, RIGOROUS AND REPRODUCIBLE PERFORMANCE EXPERIMENTS",
        speaker: "LON INGRAM",
        description: "With the rise of the mobile web, speed has become crucial to success. Users won't wait around for slow-loading pages and search engines are now punishing sluggish sites. There's a wealth of ideas out there for cranking up performance, but how do you know where to start? What if you work for days to ship an optimization that doesn't really pay off? In this talk, you'll learn how to experiment and fail fast. You'll find out how to quickly and rigorously assess your optimization ideas with open source tools, and how to share your results so that others can replicate your findings.",
        hasToggle: true
      },
      { time: "11.30AM - 12.00PM",
        title: "SOLVING IMAGINARY SCALING ISSUES, AT SCALE",
        speaker: "LAURIE VOSS",
        description: "@ThePracticalDev on Twitter once created a fake book cover called 'Solving Imaginary Scaling Issues, at Scale'. I got carried away and came up with over 30 chapters for the book. This is a fast-paced, funny tour of the many silly things people do to solve scaling problems that don't exist, and genuine, practical advice on how to really scale, from the people who serve JavaScript developers over 2 billion downloads a week.",
        hasToggle: true
      },
      { time: "12.00PM - 12.30PM",
        title: "EMOJI, WEB COMPONENTS, AND ART",
        speaker: "MONICA DINULESCU",
        description: "Making art on the web is easy, if you got the right tools. HTML has styled divs. JavaScript has canvas. I have an emoji keyboard. But what if our tools were better, and making art was easier? What if there was a magical widget that transformed any word into emoji word art? Or an image into pixels, which you can then style with CSS? What if it was easy to build these tools, embed them on any sites, and give them out to people, so that they can make art? Spoilers: it is, and I’m going to tell you about it.",
        hasToggle: true
      },
      { time: "12.30PM - 1.45PM",
        title: "LUNCH",
        speaker: "",
        description: "",
        hasToggle: false
      },
      { time: "1.45PM - 2.15PM",
        title: "ONE DAY WE WILL ALL BE FRONT END DEVELOPERS",
        speaker: "MICAH ADAMS",
        description: "Front end development skills are becoming more essential as organizations continue to leverage platforms and infrastructures as services. This talk seeks to give developers with various levels of experience a perspective on where we have come so far, where we are going, and tools to navigate the new front end ecosystem.",
        hasToggle: true
      },
      { time: "2.15PM - 2.45PM",
        title: "ATOMIC DESIGN AS A MIGRATION STRATEGY",
        speaker: "HARRISON HARNISCH",
        description: "Atomic design is well suited for migrating web applications. Because you build complexity out of simple components, you can start small and slowly carve out your application. I'd like to share how we're migrating 6 years of development at Buffer with Atomic Design.",
        hasToggle: true
      },
      { time: "2.45PM - 3.15PM",
        title: "ICE CREAM BREAK",
        speaker: "",
        description: "",
        hasToggle: false
      },
      { time: "3.15PM - 3.45PM",
        title: "ALBERS AS A MILLENIAL",
        speaker: "BILLY ROH",
        description: "What kind of art would Josef and Anni Albers have made if they were millennials? Come learn about how to make generative interactive art with the magic of JavaScript. The audience will learn about applying colour theory with HSL, composing and generating your own patterns with SVG, and creating a sense of depth with motion and interaction.",
        hasToggle: true
      },
      { time: "3.45PM - 4.15PM",
        title: "CONVERSATIONAL ULS: TALKING TO SIRI, ALEXA, AND YOUR WEB BROWSER",
        speaker: "SCOTT DAVIS",
        description: "A typical user experience these days moves seamlessly between smartphones, tablets, laptops, and even smart TVs without us even thinking about it. But what if there is no screen? What if your User Interface is talking to your wrist, or talking to thin air as you walk into a room? Gartner predicts that 30% of all interactions with computers will be done with your voice by 2020. In this talk, [REDACTED] helps break down what Conversational UIs are, and how you can adopt them in your application.",
        hasToggle: true
      },
      { time: "4.15PM - 4.35PM",
        title: "BREAK",
        speaker: "",
        description: "",
        hasToggle: false
      },
      { time: "4.35PM - 4.45PM",
        title: "ABOUT WORKSHOPS",
        speaker: "STEVE KINNEY",
        description: "",
        hasToggle: false
      },
      { time: "4.45PM - 5.15PM",
        title: "THE TRUE COST OF UNMODERATED COLLABORATION: A STORY FROM THE TRENCHES",
        speaker: "MYLES BORINS",
        description: "Is your project prepared to deal with toxic behavior? What is your plan of action when members of your community are being harassed? Without a clear code-of-conduct and moderation guidelines you will likely spend more time discussing what to do than moderating. In the time that your projects leaders have spent coming to consensus, your community members are being attacked. While an individual leaving a project due to harassment is fairly hard to ignore, it is not as clear how many individuals decide not to get involved to avoid harassment and negative attention.",
        hasToggle: true
      },
      { time: "5.15PM - 5.30PM",
        title: "CLOSING NOTES",
        speaker: "",
        description: "",
        hasToggle: false
      },
    ]);
  }
});
