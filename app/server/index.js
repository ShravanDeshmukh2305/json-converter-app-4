// import dotenv from 'dotenv';
// dotenv.config();

// import app from './app.js';
// import connectToDB from './config/dbConnection.js';

// const PORT = process.env.PORT || 5000;


// if (process.env.VERCEL !== '1') {
//   connectToDB().then(() => {
//     app.listen(PORT, () => {
//       console.log(`Local server running on port ${PORT}`);
//     });
//   });
// }


import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectToDB from './config/dbConnection.js';

const PORT = process.env.PORT || 5000;

// Local development only
if (process.env.VERCEL !== '1') {
  connectToDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Local server running on port ${PORT}`);
    });
  });
}