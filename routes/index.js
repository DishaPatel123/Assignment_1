/*Assignment:1,   Disha Patel, 301149367, 14th-feb-2021*/ 

let express = require('express');
let router = express.Router();

// Global Route Variables
let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home' 
   });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('content/about', {
    title: 'About'
   });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', {
    title: 'Projects'
   });
});



/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', {
    title: 'Services'
   });
});


/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact'
   });
});
router.get('/contact/submit', (req, res, next) => {      /*redirect to home page*/
  res.render('content/home', {
    title: 'Contact'
   });
  });

module.exports = router;
