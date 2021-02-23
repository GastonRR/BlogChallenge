var express = require('express');
var router = express.Router();

// Controller
const postController = require ('../controllers/PostController')

/* GET */

router.get('/',postController.allPost);
router.get('/:id');

/* POST */

router.post('/');

/* PATCH */

router.patch('/:id');

/* DELETE */

router.patch('/:id');

module.exports = router;
