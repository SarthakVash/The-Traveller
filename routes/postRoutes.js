import express from 'express';
import {
  createPost,
  getAllPosts,
  getRecentPosts,
  getPostById
} from '../controllers/postController.js';

const router = express.Router();

router.post('/', createPost);

router.get('/', getAllPosts);

router.get('/recent', getRecentPosts);

router.get('/:id', getPostById);

export default router;

