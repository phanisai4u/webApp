var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/',function(rer,res,next){
            
    res.json({ message: 'phani! welcome to our post api!' });   
            
});

module.exports = router;
