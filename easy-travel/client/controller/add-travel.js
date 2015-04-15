// Inside the if (Meteor.isClient) block, right after Template.body.helpers:

AddTravel = new Mongo.Collection("add_travel");


Template.add.events({
  "click #b1": function (event) {

    // This function is called when the new task form is submitted
    // console.log('tets');
    // var target = document.getElementById( "add-travel" );
    var departure_city = document.getElementById( "departure_city" ).value;
    var departure_place = document.getElementById( "departure_place" ).value;
    var arrival_city = document.getElementById( "arrival_city" ).value;
    var arrival_place = document.getElementById( "arrival_place" ).value;
    var departure_date = document.getElementById( "departure_date" ).value;
    var departure_time = document.getElementById( "departure_time" ).value;
    var price = document.getElementById( "price" ).value;
    var places = document.getElementById( "places" ).value;
    var car_model = document.getElementById( "car_model" ).value;

    AddTravel.insert({

      createdBy: Meteor.userId(),
      createdAt: new Date(), // current time
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

    // Clear form
    departure_city.value = "";
    departure_place = "";
    arrival_city = "";
    arrival_place = "";
    departure_date = "";
    departure_time = "";
    price = "";
    place = "";
    car_model = "";

    // Prevent default form submit
    event.preventDefault();
    return false;
  }

});
