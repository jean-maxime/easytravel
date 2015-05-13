
Template.login.events({

"submit form": function (event) {


var user = event.target.login.value;
var password = event.target.password.value;

console.log(user);
console.log(password);

  Meteor.loginWithPassword(user, password, function(err) {
                          if (err) {
                                  alert(err.reason);
                          } else {
                                  Router.go('home');
                          }
                  });
  // Prevent default form submit
  event.preventDefault();
  return false;
 }
 
});
