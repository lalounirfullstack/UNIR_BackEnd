const router = require('express').Router();
const AuthorsController = require('../../controllers/authors.controllers')
const Middleware = require('../../middlewares/author.middleware')


router.get('/', AuthorsController.getAuthors);
router.get('/posts', AuthorsController.getAuthorsPosts);
router.get('/posts/:authorId', Middleware.validateAuthor,AuthorsController.getAuthorPosts);
router.get('/page', AuthorsController.getAuthorsByPage);
router.get('/:authorId', Middleware.validateAuthor, AuthorsController.getAuthorById);
router.post('/', AuthorsController.createAuthor);
router.put('/:authorId', Middleware.validateAuthor, AuthorsController.updateAuthor)
router.delete('/:authorId', Middleware.validateAuthor, AuthorsController.deleteAuthor)

module.exports = router;