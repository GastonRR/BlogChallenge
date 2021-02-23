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
      res.json(format);
    } catch (err) {
        console.log(err);
    }
}

module.exports ={
    allPost
}