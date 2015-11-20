var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/halobro',function(req,res){
	res.render('halobro',{title:'halo bro!!'})
});

router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

router.get('/newuser',function(req,res) { 
  	res.render('newuser',{title:'Add New User'})
 });

module.exports = router;
