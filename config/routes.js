//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  // user's login/register
  app.get('/login', template.loginPage);  
  app.post('/login', template.login);
  app.get('/register', template.register);
  app.post('/register', template.newUser);

  // session authentication 
  app.use(authMiddleware);

  // once user has been logged in  
  app.get('/home', template.home);
  app.get('/articles', template.getarticles);
  app.post('/articles', template.getarticles);

  app.post('/saveArticles', template.saveArticles);
}

function authMiddleware(req, res, next) {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
}