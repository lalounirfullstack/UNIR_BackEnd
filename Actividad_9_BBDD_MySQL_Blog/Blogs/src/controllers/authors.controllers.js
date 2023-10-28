const AuthorModel = require('../models/author.model')
const PostModel = require("../models/post.model");

const getAuthors = async (req, res)=>{
    try{
        const [result] = await AuthorModel.getAllAuthors();
        console.log(result);
        res.json(result)
    }catch(error){
        res.json({
            fatal: `Error: ${error.message}`
        })
    }
}

const getAuthorsPosts = async(req, res)=>{
    try{
        const [authors] = await AuthorModel.getAllAuthors();
        for(let author of authors) {
            const [posts] = await PostModel.selectPostByAuthorId(author.id);
            author.posts = posts
        }
        res.json(authors)
    }catch(error){
        res.json({
            fatal: error.message
        })
    }
}


const getAuthorPosts = async(req, res)=>{
    try{
        const { authorId } = req.params;
        const [authors] = await AuthorModel.selectAuthorById(authorId);
        for(let author of authors) {
            const [posts] = await PostModel.selectPostByAuthorId(authorId);
            author.posts = posts
        }
        res.json(authors)
    }catch(error){
        res.json({
            fatal: error.message
        })
    }
}


const getAuthorsByPage= async (req, res) =>{
    const { p = 1 } = req.query;
    const { limit = 10 } = req.query;

    try{
        const [authors] = await AuthorModel.selectAuthorsByPage(
            parseInt(p),
            parseInt(limit)
        )
        res.json(authors)
    }catch(error){
         res.json({
            fatal: `Error: ${error.message}`
        })
    }
}

const getAuthorById = async (req, res) =>{
    const { authorId } = req.params;
    try{
        const [author] = await AuthorModel.selectAuthorById(authorId);
        res.json(author)
    }catch(error){
        res.json({
            fatal: `Error: ${error.message}`
        })
    }
}

const createAuthor = async (req, res)=>{
    try{
        const [result] = await AuthorModel.insertAuthor(req.body);
        const [author] = await AuthorModel.selectAuthorById(result.insertId);
        res.json(author[0]);
    }catch(error){
        res.json({
            fatal: `Error: ${error.message}`
        })
    }
}


const updateAuthor = async (req, res) =>{
    const { authorId } = req.params;
    try{
        const [result] = await AuthorModel.updateAuthorById(authorId, req.body);
        res.json(result)
    }catch(error){
        res.json({
            fatal: `Error: ${error.message}`
        })
    }
}

const deleteAuthor = async (req,res) =>{
    const { authorId } = req.params;
    console.log(authorId);
    try{
        const [result] = await AuthorModel.deleteAuthorById(authorId);
        res.json(result)
    }catch(error){
        res.json({
            fatal: `Error: ${error.message}`
        })
    }
}

module.exports = { getAuthorPosts, getAuthors, getAuthorsPosts, getAuthorsByPage, getAuthorById,  createAuthor, updateAuthor, deleteAuthor  }