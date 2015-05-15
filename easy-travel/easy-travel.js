AddTravel = new Mongo.Collection("add_travel");
User = new Mongo.Collection("user");


Router.route('myTravel', {
    path: '/mytravel/:_id',
    data: function(){
        return User.findOne({id: this.params._id});
    }
});

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
      return AddTravel.find({place: { $gt: "0" }}, {sort: {departure_date: 1}});
    }
  });

  Template.header.helpers({
    userId: function(){
      return Meteor.userId()
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

  });

  User.allow({
    update: function (userId, document, fieldNames, modifier) {
      // can only create posts where you are the author
      return true;
    }
  });

  AddTravel.allow({
    update: function (userId, document, fieldNames, modifier) {
      // can only create posts where you are the author
      return true;
    }
  });

  Meteor.methods({
    userUpdate: function (userId, travelId, place, departure_date, departure_time, departure_city, departure_place, arrival_city, arrival_place, price) {
      User.update(
        { id: userId },
        {$push: {
          travel: {id: travelId, places: place, departure_date: departure_date, departure_time: departure_time, departure_city: departure_city, departure_place: departure_place, arrival_city: arrival_city, arrival_place: arrival_place, price: price}
        }}, {upsert: true}
      );
    },

    travelUpdate: function(travelId, place){
      AddTravel.update({_id: travelId}, {$set: {place: place}});
    },

    travelAdd: function(userId, date, departure_city, departure_place, arrival_city, arrival_place, departure_date, departure_date, departure_time, price, places, car_model){
      AddTravel.insert({
        createdBy: userId,
        createdAt: date, // current time
        departure_city: departure_city,
        departure_place: departure_place,
        arrival_city: arrival_city,
        arrival_place: arrival_place,
        departure_date: departure_date,
        departure_time: departure_time,
        price: price,
        place: places,
        car_model: car_model
      });
    }

  });
}
