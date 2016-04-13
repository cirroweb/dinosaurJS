import Ember from 'ember';

export default Ember.Route.extend({

  goldSponsors:  Ember.A([
    {
      name: "Turing",
      img: "/assets/turingLogo.svg",
      link: "https://www.turing.io/",
      description: [
        "Line 1",
        "Line 2"
      ],
    },
    {
      name: "CA Technologies",
      img: "/assets/CA_logo.svg",
      link: "http://www.ca.com/us.html",
      description: [
        "Mode Set is a boutique product consultancy out of Denver, Colorado leveraging Ember and Rails. Though nerds at heart, we do more than write code. We are entrepreneurs. We are artists. We invest deeply in our clients, taking full ownership to build smart and successful products.",
      ],
    },
  ]),

  silverSponsors:  Ember.A([
    {
      name: "Silver sponsor 1",
      img: "http://richestcelebrities.org/wp-content/uploads/2014/09/Bruce-Willis-Net-Worth.jpg",
      description: [
        "Description for silver 1",
        "Line 2 of description"
      ],
    },
    {
      name: "Mode Set",
      img: "http://richestcelebrities.org/wp-content/uploads/2014/09/Bruce-Willis-Net-Worth.jpg",
      description: [
        "Mode Set is a boutique product consultancy out of Denver, Colorado leveraging Ember and Rails. Though nerds at heart, we do more than write code. We are entrepreneurs. We are artists. We invest deeply in our clients, taking full ownership to build smart and successful products.",
      ],
    },
  ]),

  setupController(controller) {
    controller.set('goldSponsors', this.goldSponsors);
    controller.set('silverSponsors', this.silverSponsors);
  },
});
