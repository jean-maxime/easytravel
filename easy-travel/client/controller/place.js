// Inside the if (Meteor.isClient) block, right after Template.body.helpers:

Template.singleId.events({
  "submit form": function (event) {

    // This function is called when the new task form is submitted
    // console.log('tets');
    // var target = document.getElementById( "add-travel" );
    var travel_id = event.target.travel_id.value;
    var places_taken = event.target.places_taken.value;
    var places_free = event.target.places_free.value;
    var places = places_free - places_taken;

    AddTravel.update({_id: travel_id}, {$set: {place: places}});


    // Prevent default form submit
    event.preventDefault();
    return false;
  }

});
