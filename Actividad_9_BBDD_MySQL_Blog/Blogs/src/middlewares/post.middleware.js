const PostModel = require('../models/post.model')

const validatePost = async (req, res, next)=>{
     const { postId } = req.params;
     try{
        const [post] = await PostModel.selectPostById(postId)
         if(!post.length){
            return res.json({
                fatal: `Post is not found!`
            })
        }
         next();
     }catch(error){
        res.json({
            fatal: error.message
        })
    }
}

module.exports = { validatePost }