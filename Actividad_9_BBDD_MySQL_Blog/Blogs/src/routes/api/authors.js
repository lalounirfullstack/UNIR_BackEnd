const router = require('express').Router();
const AuthorsController = require('../../controllers/authors.controllers')


router.get('/', AuthorsController.getAuthors);
router.get('/posts', AuthorsController.getAuthorsPosts);
router.get('/posts/:authorId', AuthorsController.getAuthorPosts);
router.get('/page', AuthorsController.getAuthorsByPage);
router.get('/:authorId', AuthorsController.getAuthorById);
router.post('/', AuthorsController.createAuthor);
router.put('/:authorId', AuthorsController.updateAuthor)
router.delete('/:authorId', AuthorsController.deleteAuthor)


module.exports = router;