// Inside the if (Meteor.isClient) block, right after Template.body.helpers:

Template.add.events({
  "submit form": function (event) {

    // This function is called when the new task form is submitted
    // console.log('tets');
    // var target = document.getElementById( "add-travel" );
    var departure_city = event.target.departure_city.value;
    var departure_place = event.target.departure_place.value;
    var arrival_city = event.target.arrival_city.value;
    var arrival_place = event.target.arrival_place.value;
    var departure_date = event.target.departure_date.value;
    var departure_time = event.target.departure_time.value;
    var price = event.target.price.value;
    var places = event.target.places.value;
    var car_model = event.target.car_model.value;

    // console.log(new Mongo.Collection("add_travel").find().fetch());

    var newTravel = {

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

    }

    AddTravel.insert(newTravel);

    // Clear form
    departure_city = "";
    departure_place = "";
    arrival_city = "";
    arrival_place = "";
    departure_date = "";
    departure_time = "";
    price = "";
    place = "";
    car_model = "";

    Router.go('/')

    // Prevent default form submit
    event.preventDefault();
    return false;
  }

});
