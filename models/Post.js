import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['travel', 'hike'],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  galleryImages: [String],
  location: {
    type: String
  },
  distance: {
    type: String
  },
  difficulty: {
    type: String,
    enum: ['easy', 'moderate', 'hard']
  },
  bestTime: {
    type: String
  },
  tips: {
    type: String
  },
  whatToExpect: {
    type: String
  },
  locationGuide: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Post', postSchema);

