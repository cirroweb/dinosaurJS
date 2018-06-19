import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.set('talks', [
      { time: "8.15AM - 9.15AM",
        title: "Breakfast and Registration",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      { time: "9.15AM - 9.30AM",
        title: "Opening Ceremonies",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      {
        time: "9.30AM - 10.00AM",
        title: "What To Expect When You’re Expecting: A Guide to Regression Testing",
        speaker: "Emily Morehouse",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "10.00AM - 10.30AM",
        title: "Houdini - how you too can write a browser rendering engine!",
        speaker: "Naina Raisinghani",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "10.30AM  - 11.10AM",
        title: "Break",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause",
      }, {
        time: "11.10AM - 11.40AM",
        title: "The Critical Request: An investigation into what blocks render",
        speaker: "Ben Schwarz",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "11.40AM - 12.10PM",
        title: "Bridging the Disconnect: Making Software to Make a Statement",
        speaker: "Chris Bolin",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "12.10PM  - 1.40PM",
        title: "Lunch",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause",
      }, {
        time: "1.40PM - 2.10PM",
        title: "Help me WebAssembly, You're My Only Hope",
        speaker: "Jay Phelps",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "2.10PM - 2.40PM",
        title: "Compilers: The New Frontier In Web Performance",
        speaker: "Chad Hietala",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "2.40PM - 3.20PM",
        title: "Break",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause",
      }, {
        time: "3.20PM - 3.50PM",
        title: "How to Program Your GPU (and Not Do It Alone)",
        speaker: "Max Bittker",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "3.50PM - 4.20PM",
        title: "Empathetic Design Systems",
        speaker: "Jennifer Wong",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "4.20PM - 5.05PM",
        title: "Break",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause",
      }, {
        time: "5.05PM - 5.35PM",
        title: "Power, Influence and Authority in Engineering Leadership",
        speaker: "Juan Pablo Buritica",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "5.35PM - 5.45PM",
        title: "Closing Ceremonies",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause"
      },
    ]);

    controller.set('workshops', [
      {
        time: "9.00AM - 12.00PM",
        title: "Node.js Serverless Design and Best Practices",
        speaker: "Bryan Hughes",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "9.00AM - 12.00PM",
        title: "Building a Component Library",
        speaker: "Alan Smith",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "9.00AM - 11.00AM",
        title: "Code Splitting 101",
        speaker: "Jhun de Andres",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "9.00AM - 12.00PM",
        title: "Fastest Progressive Web App in the West",
        speaker: "Melissa Wagasky",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "9.30AM - 11.30AM",
        title: "How Linters, Compilers, and Other Cool Things Work",
        speaker: "Will Klein",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "10.30AM - 12.00PM",
        title: "Kubernetes for JS App developers",
        speaker: "Will Klein",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "12.00PM - 1.00PM",
        title: "Lunch",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause"
      },
      {
        time: "1.00PM - 3.00PM",
        title: "Technical Writing for Developers",
        speaker: "Meeka Gayhart",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "12.30PM - 3.00PM",
        title: "Intermediate React",
        speaker: "Chris Bolin",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "1.30PM - 3.00PM",
        title: "Maps, Monads, and Pure Functions: Functional Programming for Beginners",
        speaker: "Emily Freeman & Madison Kerndt",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "1.00PM - 3.00PM",
        title: "Clouduboy: Create JS Games for Microcontrollers",
        speaker: "Flaki",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "1.00PM - 3.00PM",
        title: "Collaborative Coding with Glitch",
        speaker: "Jenn Schiffer",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "1.00PM - 3.00PM",
        title: "Serverless JavaScript in the Cloud with Google Cloud Platform",
        speaker: "Myles Borins",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
    ]);
  }
});
