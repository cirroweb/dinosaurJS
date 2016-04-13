import Ember from 'ember';

export default Ember.Route.extend({
  dom: {
    $body: $('body'),
  },


  actions: {
    toggleNav() {
      this.dom.$body.toggleClass('nav-open');
    }
  }
});


Ember.Route.reopen({
  activate: function() {
    var cssClass = this.toCssClass();
    // you probably don't need the application class
    // to be added to the body
    if (cssClass !== 'application') {
      Ember.$('body').addClass(cssClass);
    }

    // scroll to the top of the page on route change
    window.scrollTo(0,0);
  },
  deactivate: function() {
    Ember.$('body').removeClass(this.toCssClass());
  },
  toCssClass: function() {
    return this.routeName.replace(/\./g, '-').dasherize();
  }
});
