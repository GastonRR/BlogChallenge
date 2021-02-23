var express = require('express');
var router = express.Router();

// Controller
const postController = require ('../controllers/PostController')

/* GET */

router.get('/', postController.GetAllPosts);
router.get('/:id', postController.GetPostById);

/* POST */

router.post('/',postController.NewPost);

/* PATCH */

router.patch('/:id', postController.UpdatePost);

/* DELETE */

router.patch('/:id');

module.exports = router;
