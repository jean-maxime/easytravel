if (Meteor.isClient) {

  Template.home.helpers({

    user: function(){
      return Meteor.user()
    },

    travels: function(){
      currentDate = new Date();
      endDate = new Date('1/1/2018');
      return AddTravel.find({}, {sort: {departure_date: 1}});
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
