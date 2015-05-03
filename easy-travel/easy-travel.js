Router.route('singleId', {
    path: '/single/:_id',
    data: function(){
        return AddTravel.findOne({_id: this.params._id});
    }
});

if (Meteor.isClient) {

  Template.home.helpers({

    user: function(){
      return Meteor.user()
    },

    travels: function(){
      return AddTravel.find({}, {sort: {departure_date: 1}});
    }

  });

  Template.add.helpers({
    user: function(){
      return Meteor.user()
    }
  });

  Template.singleId.helpers({
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
