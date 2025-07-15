import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();
connectDB();

const app = express();


const allowedOrigins = [
  'http://localhost:5173',
  'https://fabulous-kringle-e0949d.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());


app.use('/api/posts', postRoutes);


app.get('/', (req, res) => {
  res.send('🌍 Travel Blog API is running');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
>>>>>>> 46a3db4 (🚀 Initial commit for backend with CORS fix)
