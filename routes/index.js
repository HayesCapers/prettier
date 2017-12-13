var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	 console.log('hello');
  console.log('this')
       console.log('is');
 console.log('messed uppppp');;
	res.render('index', { title: 'Express' });
});

module.exports = router;
