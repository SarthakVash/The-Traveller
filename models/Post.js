<<<<<<< HEAD

import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  // 📝 Title of the hike or travel post
  title: {
    type: String,
    required: true,
    trim: true
  },

  // Main content/body text
  content: {
    type: String,
    required: true
  },

  // Category (travel or hike)
  category: {
    type: String,
    enum: ['travel', 'hike'],
    required: true
  },

  // 🖼 Cover image (main image)
  image: {
    type: String,
    required: true
  },

  // 🖼 Optional gallery images
  galleryImages: [String],

  // 📍 Location of the destination (e.g., Pushkar, Rajasthan, India)
  location: {
    type: String
  },

  // 📏 Distance (e.g., "5 km") and difficulty level
  distance: {
    type: String
  },
  difficulty: {
    type: String,
    enum: ['easy', 'moderate', 'hard']
  },

  // 🕒 Best time to visit (e.g., "March to June")
  bestTime: {
    type: String
  },

  // ✅ Tips and what to pack (combined)
  tips: {
    type: String
  },

  // 🌄 What to expect (scenery, wildlife, terrain, etc.)
  whatToExpect: {
    type: String
  },

  // 🧭 How to reach the starting point / guide
  locationGuide: {
    type: String
  },

  // 📅 Timestamp
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Post', postSchema);
=======

import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  // 📝 Title of the hike or travel post
  title: {
    type: String,
    required: true,
    trim: true
  },

  // Main content/body text
  content: {
    type: String,
    required: true
  },

  // Category (travel or hike)
  category: {
    type: String,
    enum: ['travel', 'hike'],
    required: true
  },

  // 🖼 Cover image (main image)
  image: {
    type: String,
    required: true
  },

  // 🖼 Optional gallery images
  galleryImages: [String],

  // 📍 Location of the destination (e.g., Pushkar, Rajasthan, India)
  location: {
    type: String
  },

  // 📏 Distance (e.g., "5 km") and difficulty level
  distance: {
    type: String
  },
  difficulty: {
    type: String,
    enum: ['easy', 'moderate', 'hard']
  },

  // 🕒 Best time to visit (e.g., "March to June")
  bestTime: {
    type: String
  },

  // ✅ Tips and what to pack (combined)
  tips: {
    type: String
  },

  // 🌄 What to expect (scenery, wildlife, terrain, etc.)
  whatToExpect: {
    type: String
  },

  // 🧭 How to reach the starting point / guide
  locationGuide: {
    type: String
  },

  // 📅 Timestamp
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Post', postSchema);
>>>>>>> 46a3db4 (🚀 Initial commit for backend with CORS fix)
