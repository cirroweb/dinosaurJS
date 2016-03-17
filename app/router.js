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
  this.route('home', {path: '/'});
});


Ember.Router.reopen({
  beforeTransition: function() {
    let $body = $('body');

    if ($body.hasClass('nav-open')) {
      $body.removeClass('nav-open');
    }
    return;
   }.on('willTransition')
});

export default Router;
