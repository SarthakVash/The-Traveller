<<<<<<< HEAD
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
// ❌ import adminRoutes from './routes/adminRoutes.js'; ← Remove this line
import postRoutes from './routes/postRoutes.js';

dotenv.config();
connectDB();

const app = express();

// CORS setup
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ❌ Remove admin routes
// app.use('/api/admin', adminRoutes); ← Remove this line

// ✅ Keep post routes
app.use('/api/posts', postRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('🌍 Travel Blog API is running');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
=======
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// // ❌ import adminRoutes from './routes/adminRoutes.js'; ← Remove this line
// import postRoutes from './routes/postRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();

// // CORS setup
// app.use(cors({
//   origin: 'https://fabulous-kringle-e0949d.netlify.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// app.use(express.json());

// // ❌ Remove admin routes
// // app.use('/api/admin', adminRoutes); ← Remove this line

// // ✅ Keep post routes
// app.use('/api/posts', postRoutes);

// // Root endpoint
// app.get('/', (req, res) => {
//   res.send('🌍 Travel Blog API is running');
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () =>
//   console.log(`🚀 Server running on http://localhost:${PORT}`)
// );



import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();
connectDB();

const app = express();

// ✅ CORS setup for localhost and Netlify
const allowedOrigins = [
  'http://localhost:5173',
  'https://fabulous-kringle-e0949d.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin like mobile apps or curl
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

// ✅ Post routes
app.use('/api/posts', postRoutes);

// ✅ Root route
app.get('/', (req, res) => {
  res.send('🌍 Travel Blog API is running');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
>>>>>>> 46a3db4 (🚀 Initial commit for backend with CORS fix)
