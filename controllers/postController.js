const Post = require('../models/Post.js');

//get all
exports.getPost = async (req,res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//get some post
exports.getPostid = async (req,res) => {
    try {
        const {id} = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//add post
exports.postPost = async (req, res) => {
    try {
        const {
            Job_title       ,
            Job_description ,
            Job_location    ,
            Job_building    ,
            Job_room        ,
            Job_time_start  ,
            Job_time_end    ,
            Count           ,
            Reserve_count   ,
            Traveling_type  ,
            Food_Sup        ,
            Salary} = req.body;
        const post = new Post({
            Job_title       ,
            Job_description ,
            Job_location    ,
            Job_building    ,
            Job_room        ,
            Job_time_start  ,
            Job_time_end    ,
            Count           ,
            Reserve_count   ,
            Traveling_type  ,
            Food_Sup        ,
            Salary});
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Edit Post
exports.editPost = async (req,res) => {
    try {
        const { id } = req.params;
        const posts = await Post.findById(id);

        if(!posts) return res.status(404).json({message: 'Post not found !'});
        const Edit = req.body;
        Object.assign(posts, Edit);
        const updatePost = await posts.save();
        res.json(updatePost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
//Delete Post
exports.deletePost = async (req,res) => {
    try {
        const { id } = req.params;
        const posts = await Post.findById(id);
        if (!posts) return res.status(404).json({message: 'Post not found !'});
        await Post.findByIdAndDelete(id);
        res.json({message : 'Post Deleted !'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}