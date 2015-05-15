Template.singleId.events({
  "submit form": function (event) {

    var travel_id = event.target.travel_id.value;
    var places_taken = event.target.places_taken.value;
    var places_free = event.target.places_free.value;
    var places = places_free - places_taken;
    var user_id = event.target.user_id.value;
    var departure_date = event.target.departure_date.value;
    var departure_time = event.target.departure_time.value;
    var departure_city = event.target.departure_city.value;
    var departure_place = event.target.departure_place.value;
    var arrival_city = event.target.arrival_city.value;
    var arrival_place = event.target.arrival_place.value;
    var price = event.target.price.value;

    // Add travel in collection
    Meteor.call('travelUpdate', travel_id, places);

    // Add travel to user collection
    Meteor.call('userUpdate', user_id, travel_id, places_taken, departure_date, departure_time, departure_city, departure_place, arrival_city, arrival_place, price);
  
    // Prevent default form submit
    event.preventDefault();
    Router.go('/');
    return false;
  }


});

Template.singleId.events({

  "click button":function(){
    $('#place').fadeIn();
  }
});
