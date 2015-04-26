if (Meteor.isClient) {

  Template.home.helpers({

    user: function(){
      return Meteor.user()
    },

    travels: function(){
      return AddTravel.find();
    }

  });

  Template.add.helpers({
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

AddTravel = new Mongo.Collection("add_travel");
