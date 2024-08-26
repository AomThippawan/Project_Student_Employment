const Post = require('../models/Post');
//get all
exports.getPost = async (req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    };
};
//get some post
exports.getPostid = async (req,res) => {
    try {
        const { Post_id } = req.params;
        const posts = await Post.findById(Post_id);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    };
};
//add post
exports.postPost = async (req,res) => {
    try {
        const { Job_title,       
            Job_description, 
            Job_location,    
            Job_building,    
            Job_room,        
            Job_time_start,
            Job_time_end,    
            Count,           
            Reserve_count,   
            Traveling_type,  
            Food_Sup,      
            Salary } = req.body;
            const startTime = new Date(Job_time_start);
            const endTime = new Date(Job_time_end);
        const posts = new Posts({
            Job_title,       
            Job_description, 
            Job_location,    
            Job_building,    
            Job_room,        
            Job_time_start  : startTime,
            Job_time_end    : endTime,    
            Count,           
            Reserve_count,   
            Traveling_type,  
            Food_Sup,      
            Salary});
        const savedPosts = await posts.save();//Warning------------------------------maybe 'Post'
        res.status(201).json(savedPosts);
    } catch (error) {
        req.status(500).json({message: error.message});
    };
};
// Edit Post
exports.editPost = async (req,res) => {
    try {
        const { Post_id } = req.params;
        const posts = await Post.findById(Post_id);

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
        const { Post_id } = req.params;
        const posts = await Post.findById(Post_id);
        if (!posts) return res.status(404).json({message: 'Post not found !'});
        await Post.findByIdAndDelete(Post_id);
        res.json({message : 'Post Deleted !'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}