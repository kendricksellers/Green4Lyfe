import * as blogPostController from '../controller/controllers/blogPostController.js';
import express from 'express';
const blogPostRouter = express.Router();

blogPostRouter.post('/', blogPostController.create);
blogPostRouter.get('/', blogPostController.getAllPosts);
blogPostRouter.get('/:username/:postID', blogPostController.getPost);
blogPostRouter.get('/:username', blogPostController.getAllPostsByUsername);
blogPostRouter.put('/:username/:postID', blogPostController.updatePost);
blogPostRouter.delete('/:username/:postID', blogPostController.deletePost);

export default blogPostRouter;