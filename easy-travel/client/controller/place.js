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
    var user_id = event.target.user_id.value;

    AddTravel.update({_id: travel_id}, {$set: {place: places}});
    
    // User.createIndex({id: 1}, { unique: true });
    // If user exist -> update else -> create
    // User.insert({id: user_id, travel: [{id: travel_id, places: places_taken}]});
    // User.update({id: user_id}, upsert: true);

    // User.update(
    //   { id: user_id },
    //   {$push: {
    //     travel: {id: travel_id, places: places_taken}
    //   }}, {upsert: true}
    // );

    Meteor.call('userUpdate', user_id, travel_id,places_taken);
  
    // Prevent default form submit
    event.preventDefault();
    return false;
  }


});

Template.singleId.events({

  "click button":function(){
    $('#place').fadeIn();
  }


});

// Meteor.startup(function() {
//   $('.book').click(function(){
//     alert('test')
//   })
// });
