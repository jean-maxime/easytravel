Template.add.events({
  "submit form": function (event) {

    var departure_city = event.target.departure_city.value;
    var departure_place = event.target.departure_place.value;
    var arrival_city = event.target.arrival_city.value;
    var arrival_place = event.target.arrival_place.value;
    var departure_date = event.target.departure_date.value;
    var departure_time = event.target.departure_time.value;
    var price = event.target.price.value;
    var places = event.target.places.value;
    var car_model = event.target.car_model.value;

    Meteor.call('travelAdd', Meteor.userId(), new Date(), departure_city, departure_place, arrival_city, arrival_place, departure_date, departure_date, departure_time, price, places, car_model);

    Router.go('/')

    // Prevent default form submit
    event.preventDefault();
    return false;
  }

});
