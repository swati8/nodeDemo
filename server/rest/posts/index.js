var express = require('express');
var router = express.Router();

var controller = require('./postController');

router.get('/',controller.getposts);

router.post('/',controller.post);

router.put('/',controller.post);

router.delete('/',controller.post);

module.exports = router;