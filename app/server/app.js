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

// Middleware
app.use(cors());
app.use(express.json());

// Routes must use '/.netlify/functions/api' prefix for Vercel
app.use('/.netlify/functions/api', jsonRoutes); 
app.use('/.netlify/functions/api', base64Routes);

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    code: 'NOT_FOUND',
    message: 'Route not found' 
  });
});

export const handler = serverless(app);
export default app;