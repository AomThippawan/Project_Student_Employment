const express = require ('express');
const router = express.Router();
const { getPost, getPostid, postPost, editPost, deletePost} =  require ('../controllers/postController');

router.get("/",getPost);
router.get("/:Post_id",getPostid);
router.post("/",postPost);
router.put("/:Post_id",editPost);
router.delete("/:Post_id",deletePost);

module.exports = router;