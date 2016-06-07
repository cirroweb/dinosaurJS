import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A([
      {
        name:      "Breakfast and Registration",
        time:      "8:00AM - 9:00AM",
        speaker:   "",
        speakerId: "",
        isTalk: false,
        talkDescription: [
          ""
        ]
      },
      {
        name:      "Welcome Kickoff",
        time:      "9:00AM - 9:14AM",
        speaker:   "",
        speakerId: "",
        isTalk: false,
        talkDescription: [
          ""
        ]
      },
      {
        name:      "Javascript as Play",
        time:      "9:15AM - 9:45AM",
        speaker:   "Rachel White",
        speakerId: "rachel-white",
        isTalk: true,
        talkDescription: [
          "Now that you know enough frontend technologies to be dangerous, lets use those skills to make a game! We'll take a look at the open source framework Phaser to learn how to create your own browser based game. Together we'll explore topics such as sprite animation, collision detection, and scoring-- by the end we'll have a playable platformer you can tinker with."
        ]
      },
      {
        name:      "What Ever Happened to Those Dinosaurs?",
        time:      "9:45AM - 10:15AM",
        speaker:   "Mark DiMarco",
        speakerId: "mark-dimarco",
        isTalk: true,
        talkDescription: [
          "Asteroids and comets are among the Near Earth Objects that NASA is constantly monitoring, hoping to detect a future collision long before our planet is in danger. Mark DiMarco will show us how to scrape a the NASA website for free data and create an interactive data visualizations with D3 that shows close fly-bys of asteroids. In the process, we’ll learn a little bit about asteroids and a lot about data visualization with D3."
        ]
      },
      {
        name:      "Getting Started with WebGL",
        time:      "10:15AM - 10:45AM",
        speaker:   "Joanne Cheng",
        speakerId: "joanne-cheng",
        isTalk: true,
        talkDescription: [
          "WebGL is a way of rendering graphics using the GPU that allows us to display complex graphics right in the browser. WebGL is often associated with experimental interactive art and games, however, it's currently being used in exciting ways in more common web applications. In this talk, we'll walk through the overall WebGL architecture and explore innovative projects using this technology. We'll then create a few basic WebGL examples to get our feet wet, with the help of Three.js, a popular library around WebGL."
        ]
      },
      {
        name:      "Justin Gitlin Introduces 'OhHeckYeah'",
        time:      "10:45AM - 10:55AM",
        speaker:   "",
        speakerId: "",
        isTalk: false,
        talkDescription: [
          ""
        ]
      },
      {
        name:      "Coffee and Snack Break",
        time:      "10:55AM - 11:20AM",
        speaker:   "",
        speakerId: "",
        isTalk: false,
        talkDescription: [
          ""
        ]
      },
      {
        name:      "Doing the Unstuck: how to Make Browsers Compatible With Web JavaScript",
        time:      "11:20AM - 11:50AM",
        speaker:   "Mike Taylor",
        speakerId: "mike-taylor",
        isTalk: true,
        talkDescription: [
          "What does it mean for JavaScript to be—or not to be—compatible with the web? And what does it mean for a browser vendor to be compatible with web JavaScript?<br><br>In this talk, I'll discuss some of the issues that arise when browser vendors attempt to become backwards and forward compatible with the web, either by adding proposed language and standards features or removing ancient ones. Things can break in weird ways on the web—sometimes we need to hack the EcmaScript, DOM and CSSOM standards in similarly weird ways."
        ]
      },
      {
        name:      "Making it Better Without Making it Over",
        time:      "11:50AM - 12:20PM",
        speaker:   "Rebecca Murphy",
        speakerId: "rebecca-murphy",
        isTalk: true,
        talkDescription: [
          "Maybe you’re lucky enough to live in the world where everything you build is shiny and new, but there are an awful lot of people working onc lient-side apps that came into being back when yayQuery was a thing and Backbone wasn’t. In this talk, I'll share the story of how I started a new job this year by paying a visit to JavaScript circa 2009, back when Ryan Dahl was getting ready to announce Node and Facebook was still four years away from being mocked for the apparent heresy of JSX.<br><br>I'll explain how I modernized and best-practice-ified a project that didn't even have a package.json, smoothing the development process, eliminating common sources of bugs, paving the way for bigger improvements, and never once uttering the words 'we oughta just start from scratch."
        ]
      },
      {
        name:      "Lunch",
        time:      "12:20PM - 1:50PM",
        speaker:   "",
        speakerId: "",
        isTalk: false,
        talkDescription: [
          ""
        ]
      },
      {
        name:      "10 Feet and Rising: Building Television-Friendly Web Pages",
        time:      "1:50PM - 2:20PM",
        speaker:   "Potch",
        speakerId: "potch",
        isTalk: true,
        talkDescription: [
          "Every new device wants to be online, which brings us to a bold-but-old frontier—the TV. A series of challenges await us in the living room: How do I build a UI legible across a room? How do I interact with it? The constraints of even the tiniest screens taught us what we need to build for largest ones."
        ]
      },
      {
        name:      "The Age of the Javascript-Powered Desktop",
        time:      "2:20PM - 2:50PM",
        speaker:   "Evan Morikawa",
        speakerId: "evan-morikawa",
        isTalk: true,
        talkDescription: [
          "It’s time for JavaScript developers to start building the Mac, Windows, and Linux applications people spend their entire working day using. Modern tools like Electron, Node, and the latest ECMA/W3C specs are making it possible to easily build highly performant, native-feeling desktop apps. This talk is about how to use these tools to build desktop apps, lessons & patterns from our experience building an open source desktop email client called N1, and why we’re entering the age of the javascript-powered desktop."
        ]
      },
      {
        name:      "Server Farm to Table (or, How the Internet Works)",
        time:      "2:50PM - 3:20PM",
        speaker:   "Jenna Zeigen",
        speakerId: "jenna-zeigen",
        isTalk: true,
        talkDescription: [
          "Many of us depend on the internet for both work and play, but it's possible to go about our lives without knowing the steps it takes to get those pixels to show up and delight us and our users. However, a sense of this process can help us as developers write better software and understand the motivation behind many optimizations that we've been taught. This talk will cover the life of a web request in a browser, from entering the URL to the processing the HTML, covering DNS, TLS, TCP, HTTP, and HTML parsing and rendering, explaining how each step affects the performance of web apps."
        ]
      },
      {
        name:      "Coffee and Snack Break",
        time:      "3:20PM - 3:45PM",
        speaker:   "",
        speakerId: "",
        isTalk: false,
        talkDescription: [
          ""
        ]
      },
      {
        name:      "Single Page Access: The Road to Using Our Power for Good",
        time:      "3:45PM - 4:15PM",
        speaker:   "Suz Hinton",
        speakerId: "suz-hinton",
        isTalk: true,
        talkDescription: [
          "Building single page applications with front-end frameworks such as Ember, React, or Angular, can be very powerful. In some ways, the user experience is improved by using these frameworks. On the other hand, the single page paradigm commonly introduces some anti-patterns which prevent users from accessing and using your application.<br><br>Building single page applications with front-end frameworks such as Ember, React, or Angular, can be very powerful. In some ways, the user experience is improved by using these frameworks. On the other hand, the single page paradigm commonly introduces some anti-patterns which prevent users from accessing and using your application."
        ]
      },
      {
        name:      "IoT Prototyping with Firebase and JavaScript",
        time:      "4:15PM - 4:45PM",
        speaker:   "Jen Tong",
        speakerId: "jen-tong",
        isTalk: true,
        talkDescription: [
          "Everyone seems to be talking about the Internet of Things. From houseplants to ice machines, from fitness bracelets to fish tanks: it’s all fair game.<br><br>Hardware hacking is a lot of fun, but it also brings new challenges. Early validation is critical. You need to be confident that your plan is going to work before you order a bunch of printed circuit boards.<br><br>Hardware hacking is a lot of fun, but it also brings new challenges. Early validation is critical. You need to be confident that your plan is going to work before you order a bunch of printed circuit boards."
        ]
      },
      {
        name:      "Wrap-Up and Closing Remarks",
        time:      "4:45PM - 5:00PM",
        speaker:   "",
        speakerId: "",
        isTalk: false,
        talkDescription: [
          ""
        ]
      },
      {
        name:      "After Party",
        time:      "6:00PM - 9:00PM",
        speaker:   "",
        speakerId: "",
        isTalk: false,
        talkDescription: [
          ""
        ]
      }
    ]);
  },
});
