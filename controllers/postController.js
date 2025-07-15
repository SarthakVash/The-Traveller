import Post from '../models/Post.js';

export const createPost = async (req, res) => {
  try {
    const {
      title,
      content,
      category,
      image,
      description,
      tips,
      locationGuide,
      galleryImages,
      location,
      distance,
      difficulty,
      bestTime,
      whatToPack,
      whatToExpect
    } = req.body;

    if (!title || !content || !category || !image) {
      return res.status(400).json({ message: "Title, Content, Category & Image are required" });
    }

    const post = new Post({
      title,
      content,
      category,
      image,
      description,
      tips,
      locationGuide,
      galleryImages,
      location,
      distance,
      difficulty,
      bestTime,
      whatToPack,
      whatToExpect
    });

    await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error while creating post" });
  }
};


export const getAllPosts = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const posts = await Post.find(filter).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching all posts:", error);
    res.status(500).json({ message: "Server error fetching posts" });
  }
};


export const getRecentPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    res.status(500).json({ message: "Server error fetching recent posts" });
  }
};


export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    res.status(500).json({ message: "Server error fetching post" });
  }
};
