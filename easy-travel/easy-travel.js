if (Meteor.isClient) {

  Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
      this.render('login');
    } else {
      this.next();
    }
  });

  Router.route('/', function(){
    this.render('home');

    Template.home.helpers({
      user: Meteor.user()
    });

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
