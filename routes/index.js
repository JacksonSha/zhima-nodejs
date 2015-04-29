var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { subpage: 'sub_home' });
});

router.get('/blog', function(req, res, next) {
  res.render('main', { subpage: 'sub_blog' });
});

router.get('/blog/:page', function(req, res, next) {
  res.render('main', { subpage: 'sub_blog' });
});

router.get('/about', function(req, res, next) {
  res.render('main', { subpage: 'sub_about' });
});

router.get('/guest', function(req, res, next) {
  res.render('main', { subpage: 'sub_guest' });
});

router.get('/single/:aid', function(req, res, next) {
  res.render('main', { subpage: 'sub_single' });
});

//router.post('/show/:subpage', function(req, res, next) {
//  res.render('content/'+req.params.subpage, {});
//});

module.exports = router;
