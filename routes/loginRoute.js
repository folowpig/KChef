// ./routes/loginRoutes.js
module.exports = (serverApp, passport) => {

  var neo4j = require('../config/configuration');
  var neo_session = neo4j.databaseConfig.session;
  var pass = require("../config/passport");

  // Home Page
  serverApp.get('/sociallogin', login, (req, res) => {
    res.render('index.ejs'); // load the index.ejs file
  });

  // Login Page
  // show the login form
  serverApp.get('/login', (req, res) => {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage') }); 
  });

  // process the login form
  serverApp.post('/login', passport.authenticate('local-login', {
    successRedirect : '/',    //if succeed, redirect to home page
    failureRedirect : '/login',    //if not, redirect to signup page
    failureFlash : true
  }));

  // Signup Page
  // show the signup form
  serverApp.get('/signup', (req, res) => {
    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  serverApp.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/initChoose',    //if succeed, redirect to profile page
    failureRedirect : '/signup',    //if not, redirect to signup page
    failureFlash : true
  }));

  // Logout page 
  serverApp.get('/logout', (req, res) => {
    neo_session.close();
    req.logout();
    res.redirect('/');
  });

  // Google Social Login
  serverApp.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}));

  // Google Social Login callback
  serverApp.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect : '/sociallogin'
  }), (req, res) => {
    if(pass.check === true) {
      res.redirect('/')
    } else {
      res.redirect('/initChoose');
    }
  });

  //Show Visualization graph of relationship between User and Movie nodes
  serverApp.get('/visualization', /* isLoggedIn, */ (req, res) => {
    res.render('graphVis.ejs', {});
  });
};

// route middleware to make sure a user is logged in
module.exports.isLoggedIn = (req, res, next) => {
  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/sociallogin');
}

function login(req, res, next) {
  if (!req.isAuthenticated())
    return next();
  
  res.redirect('/user');
}