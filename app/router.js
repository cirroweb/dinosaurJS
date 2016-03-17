import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('speakers');
  this.route('schedule');
  this.route('about');
  this.route('location');
  this.route('sponsors');
  this.route('register');
});

export default Router;
