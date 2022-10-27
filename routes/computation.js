var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var x=Math.random();
    res.render('computation', { val: `math.fround() applied to ${x} is ${Math.fround(x)}`,
    val1: `math.random() applied to ${x} is ${Math.random(x)}` ,
    val2: `math.round() applied to ${x} is ${Math.round(x)}` });
  }
  else{

    for (let i in req.query) {

      console.log(i)

      res.render('computation', { val: `math.fround() applied to ${req.query[i]} is ${Math.fround(req.query[i])}`,
      val1: `math.random() applied to ${req.query[i]} is ${Math.random(req.query[i])}` ,
      val2: `math.round() applied to ${req.query[i]} is ${Math.round(req.query[i])}` })

    }
  }


});


module.exports = router;