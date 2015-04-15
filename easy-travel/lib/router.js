  Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
      this.render('login');
    } else {
      this.next();
    }
  });

  Router.route('/', function(){
    this.render('home');

  });

  Router.route('/add-travel', function(){
    this.render('add-travel');

  });
