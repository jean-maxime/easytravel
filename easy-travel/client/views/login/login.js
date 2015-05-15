
Template.login.events({

"submit form": function (event) {

  $('#error-account').removeClass('active');

//pure javascript
var user = event.target.login.value;
var password = event.target.password.value;

console.log(user);
console.log(password);

  Meteor.loginWithPassword(user, password, function(err) {
                          if (err) {
                            // alert(err.reason);
                            $('#error-login').removeClass('active');
                            $('#error-login').addClass('active');
                            $('.login-button').removeClass('active');
                            $('.create-account').addClass('active');
                              // var error = document.getElementById('error-login');
                              // error.className += "active";
                              // executed = false;

                          } else {
                                  Router.go('home');
                          }
                  });
  // Prevent default form submit
  event.preventDefault();
  return false;
},

 "click button.create-account": function (e) {
   e.preventDefault();
   //with jQuery
   $('#error-login').removeClass('active');

   var email = $('#login-form input#login').val();
   var password = $('#login-form input#password').val();

   var isValidPassword = function(val) {
     return val.length >= 6 ? true : false;
  }

  if (isValidPassword(password)){

   Accounts.createUser({email: email, password : password}, function(err){
          if (err) {
            // Inform the user that account creation failed
            alert(err);

          } else {
            // Success. Account has been created and the user
            // has logged in successfully.
          }

        });
    }else{
      $('#error-account').removeClass('active');
      $('#error-account').addClass('active');
    }

      return false;


 }


});
