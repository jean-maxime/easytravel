if (Meteor.isClient) {

  Template.home.helpers({
    user: function(){
      return Meteor.user()
    }
  });

  Template["add-travel"].helpers({
    user: function(){
      return Meteor.user()
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
