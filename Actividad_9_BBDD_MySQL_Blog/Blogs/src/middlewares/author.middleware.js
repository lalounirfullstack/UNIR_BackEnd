const AuthorModel = require('../models/author.model')

const validateAuthor = async (req, res, next)=>{
     const { authorId } = req.params;
     try{
        const [author] = await AuthorModel.selectAuthorById(authorId)
         if(!author.length){
            return res.json({
                fatal: 'Author is not found!'
            })
        }
         next();
     }catch(error){
        res.json({
            fatal: error.message
        })
    }
}

module.exports = { validateAuthor }