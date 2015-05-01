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

  Router.route('/add', function(){
    this.render('add');

  });

  Router.route('/single', function(){
    this.render('single');

  });
