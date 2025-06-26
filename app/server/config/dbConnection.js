// import mongoose from 'mongoose';

// const connectToDB = async () => {
//   try {
//     const { connection } = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB connected: ${connection.host}`);
//   } catch (error) {
//     console.error('Database connection failed:', error.message);
//     process.exit(1);
//   }
// };

// export default connectToDB;




// In dbConnection.js

import mongoose from 'mongoose';


const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('DB connection failed:', error.message);
    // Don't exit process in serverless environment
    if (process.env.VERCEL !== '1') process.exit(1);
  }
};

export default connectToDB;