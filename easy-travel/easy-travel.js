AddTravel = new Mongo.Collection("add_travel");
User = new Mongo.Collection("user");

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
    },

    user_perso: function(){
      return User.find();
    }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });

  User.allow({
    update: function (userId, document, fieldNames, modifier) {
      // can only create posts where you are the author
      return true;
    }
  });

  Meteor.methods({
    userUpdate: function (userId, travelId, place) {
      User.update(
        { id: userId },
        {$push: {
          travel: {id: travelId, places: place}
        }}, {upsert: true}
      );
    } 
  }); 
}



