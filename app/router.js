import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('2016', function() {
    this.route('speakers');
    this.route('schedule');
    this.route('attend');
    this.route('home');
    this.route('code-of-conduct');
    this.route('team');
  });
  this.route('seventeen', { path: '/' }, function() {
    this.route('speakers');
  });
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
