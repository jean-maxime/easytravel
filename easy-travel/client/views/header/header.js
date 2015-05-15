Template.header.events({

  "click #my-profile": function(e){
    // e.preventDefault();
    $('#profile').toggleClass('active');
    // alert('hello');
  }

});


Template.outer.events({
  "click": function () {
    alert('test');
  }
});
