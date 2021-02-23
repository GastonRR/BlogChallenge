/* DB MODEL POST */
const { Post } = require('../database/models')

/* Helpers */
const Helper = require('../helpers')

/* Controller method: GET */

const GetAllPosts = async (req, res, next) =>{
    try {
        const posts = await Post.findAll({
            include: [{
                association: "Category"
            }],
            order: [
                [
                    'creationTime', 'DESC'
                ]
            ]
        })
        jsonPost = JSON.parse(JSON.stringify(posts));
        format = jsonPost.map((post)=>{
            delete post.content;
            return post;
        })
        res.status(200).json({
            status: "OK",
            msg: "POSTS_FOUND",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                posts:format
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "ERROR",
            msg: "NOT_FOUND",
            endpoint: req.originalUrl,
            method: req.method
        })
    }
}

const GetPostById = async (req, res, next) =>{
    try {
        idPost = req.params.id;
        const post = await Post.findOne({
            include: [{
                association: "Category"
            }],
            where : {
                id: idPost
            } 
        }); 
        if(post == null){
            throw "not found";
        }
        res.status(200).json({
            status: "OK",
            msg: "POST_FOUND",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                posts:post
            }
        })   
    } catch (err) {
        res.status(404).json({
            status: "ERROR",
            msg: "POST_NOT_FOUND",
            endpoint: req.originalUrl,
            method: req.method
        })
    }
}

/* Controller method: POST */
const NewPost = async (req,res,next)=>{
    try {
        let img = req.body.img;
        let checkImage = await Helper.CheckUrlImage(img);
        if(!checkImage){
            throw 'Link is not valid'
        }
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            img: img,
            idCategory: req.body.category,
            creationTime: Date.now()
        })
        res.status(202).json({
            status: "OK",
            msg: "CORRECT_CREATION",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                post: newPost
            }
        })
   
    } catch (err) {
        res.status(404).json({
            status: "ERROR",
            msg: err,
            endpoint: req.originalUrl,
            method: req.method
        })
    }
  
}
/* Controller method: PATCH */ 
const UpdatePost = async (req,res,next) =>{
    try {
        let idToEdit = req.params.id;
        let checkIfExist = await Post.findByPk(idToEdit);
        if(checkIfExist == null){
            throw "post not exist"
        }
        const editPost = await Post.update(req.body,{
            where:{
                id: idToEdit
            }
        });
        res.status(200).json({
            status: "OK",
            msg: "CORRECT_UPDATE",
            endpoint: req.originalUrl,
            method: req.method,
        });
        
    } catch (error) {

        res.status(404).json({
            status: "ERROR",
            msg: error,
            endpoint: req.originalUrl,
            method: req.method,
        });
    }
  

}
module.exports ={
    GetAllPosts,
    GetPostById,
    NewPost,
    UpdatePost
}