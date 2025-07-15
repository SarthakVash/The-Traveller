<<<<<<< HEAD

import express from 'express';
import {
  createPost,
  getAllPosts,
  getRecentPosts,
  getPostById
} from '../controllers/postController.js';

const router = express.Router();

// Create a new post
router.post('/', createPost);

// Get all posts or by category (e.g., /api/posts?category=travel)
router.get('/', getAllPosts);

// Get 10 most recent posts (optional use case)
router.get('/recent', getRecentPosts);

// Get single post by ID
router.get('/:id', getPostById);

export default router;
=======

import express from 'express';
import {
  createPost,
  getAllPosts,
  getRecentPosts,
  getPostById
} from '../controllers/postController.js';

const router = express.Router();

// Create a new post
router.post('/', createPost);

// Get all posts or by category (e.g., /api/posts?category=travel)
router.get('/', getAllPosts);

// Get 10 most recent posts (optional use case)
router.get('/recent', getRecentPosts);

// Get single post by ID
router.get('/:id', getPostById);

export default router;
>>>>>>> 46a3db4 (🚀 Initial commit for backend with CORS fix)
