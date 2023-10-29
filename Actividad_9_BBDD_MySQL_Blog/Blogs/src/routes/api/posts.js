const PostsController = require("../../controllers/posts.controllers");
const router = require('express').Router();
const Middleware = require('../../middlewares/post.middleware')



router.get('/', PostsController.getPosts);
router.get('/:postId', Middleware.validatePost, PostsController.getPostById);
router.post('/', PostsController.createPost)
router.put('/:postId', Middleware.validatePost, PostsController.updatePost)
router.delete('/:postId', Middleware.validatePost, PostsController.deletePost)

module.exports = router;