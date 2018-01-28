var express = require('express');
var router = express.Router();
var bars = require('../controllers/bars');

router.get('/', bars.index);
router.get('/new', function(req, res) {
    res.render('bars/new');
  });
router.post('/', bars.create);

module.exports = router;