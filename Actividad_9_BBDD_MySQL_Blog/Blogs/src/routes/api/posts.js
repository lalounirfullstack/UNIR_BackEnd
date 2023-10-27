const PostsController = require("../../controllers/posts.controllers");
const router = require('express').Router();

router.get('/', PostsController.getPosts);
router.get('/:postId', PostsController.getPostByAuthorId);
router.post('/', PostsController.createPost)
router.put('/:postId', PostsController.updatePost)
router.delete('/:postId', PostsController.deletePost)

module.exports = router;