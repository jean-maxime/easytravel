// Inside the if (Meteor.isClient) block, right after Template.body.helpers:

AddTravel = new Mongo.Collection("add_travel");

Template["add-travel"].events({
  "submit .add-travel": function (event) {
    // This function is called when the new task form is submitted

    var target = event.target;
    var departure_city = target.departure_city.value;
    var departure_place = target.departure_place.value;
    var arrival_city = target.arrival_city.value;
    var arrival_place = target.arrival_place.value;
    var departure_date = target.departure_date.value;
    var departure_time = target.departure_time.value;
    var price = target.price.value;
    var place = target.place.value;
    var car_model = target.car_model.value;

    AddTravel.insert({

      createdBy : Meteor.userId(),
      createdAt: new Date(), // current time
      departure_city: departure_city,
      departure_place: departure_place,
      arrival_city: arrival_city,
      arrival_place: arrival_place,
      departure_date: departure_date,
      departure_time: departure_time,
      price: price,
      place: place,
      car_model: car_model

    });

    // Clear form
    target.departure_city.value = "";
    target.departure_place.value = "";
    target.arrival_city.value = "";
    target.arrival_place.value = "";
    target.departure_date.value = "";
    target.departure_time.value = "";
    target.price.value = "";
    target.place.value = "";
    target.car_model.value = "";

    // Prevent default form submit
    return false;
  }
});
