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
    let cssClass = this.toCssClass();
    let isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let isMobileClass = isMobile ? 'mobile' : 'not-mobile';

    // you probably don't need the application class
    // to be added to the body
    if (cssClass !== 'application') {
      Ember.$('body').addClass(`${cssClass} ${isMobileClass}`);
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
