const knex = require("../db/knex.js");
const { topHeadLines } = require('../config/NewsAPI.js');

module.exports = {
  loginPage: function (req, res) {
    res.render('login');
  },

  // login: async function(req, res) {
  //   const userArr = await knex('user').where({email: req.body.email})
  //   let user = userArr[0];
  //   if(user && user.password === req.body.password) {
  //     let rows = await knex('user').where({ email: req.body.email })
  //     let currUser = rows[0];
  //     req.session.user_id = currUser.id;
  //       req.session.save((err)=> {
  //         if(err) {
  //           console.log(err);
  //         }
  //         knex('user').where({ id: req.session.user_id})
  //           .then(()=> {
  //             res.redirect('/home');
  //           })
  //       })
  //     } else {
  //       res.redirect('/login');
  //     }   
  // },

  login: function (req, res) {
    knex('user').where('email', req.body.email)
      .then((data) => {
        let user = data[0];
        if (!user) {
          res.redirect('/login');
          return;
        }
        if (user.password === req.body.password) {
          req.session.user_id = user.id;
          req.session.save(() => {
            res.redirect('/home');
          })
        } else {
          res.redirect('/login');
        }
      })
  },

  home: function (req, res) {
    knex('user').where('id', req.session.user_id)
    .then((results) => {
      topHeadLines({ language: 'en', country: 'us' })
      .then((data) => {
        res.render('home', { user: results[0], data: data.totalResults })
        })  
      })
  },

  register: function (req, res) {
    res.render('register');
  },

  newUser: function (req, res) {
    knex.select().from('user').where('id', req.params.id)
      .insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(() => {
        res.redirect('/login');
      })
  },

  getarticles: function (req, res) {
    topHeadLines({ language: 'en', country: 'us' })
      .then(response => {
        res.render('articles', { data: response.articles });
      })
  },

  saveArticles: function(req, res) {
    
  }

}

