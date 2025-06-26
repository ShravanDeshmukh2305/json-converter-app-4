// import express from 'express';
// import cors from 'cors';
// import serverless from 'serverless-http'; 
// import jsonRoutes from './routes/jsonRoutes.js';
// import base64Routes from './routes/base64Routes.js';

// const app = express();


// app.use(cors());
// app.use(express.json());


// app.use('/api', jsonRoutes);
// app.use('/api', base64Routes);


// export const handler = serverless(app); 
// export default app; 



import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import jsonRoutes from './routes/jsonRoutes.js';
import base64Routes from './routes/base64Routes.js';

const app = express();

// Essential middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json({ limit: '10mb' }));

// API Routes
app.use('/api', jsonRoutes);
app.use('/api', base64Routes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Error handling (must be last)
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    code: 'SERVER_ERROR',
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  });
});

export const handler = serverless(app);
export default app;