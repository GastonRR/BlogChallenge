/* DB MODEL POST */
const { Post } = require('../database/models')

/* Controller GETS */

const allPost = async (req, res, next) =>{
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

module.exports ={
    allPost
}