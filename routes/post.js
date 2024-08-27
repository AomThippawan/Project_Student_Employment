const express = require ('express');
const router = express.Router();
const { getPost, getPostid, postPost, editPost, deletePost} =  require ('../controllers/postController');
const authenticateToken = require('../middleware/auth');

router.get("/",authenticateToken,getPost);
router.get("/:id",authenticateToken,getPostid);
router.post("/",authenticateToken,postPost);
router.put("/:id",authenticateToken,editPost);
router.delete("/:id",authenticateToken,deletePost);

module.exports = router;