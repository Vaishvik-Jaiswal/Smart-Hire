import mongoose from 'mongoose';

export const connectDB = async () => {

    //if already connected
  if (mongoose.connections[0].readyState) {
    return mongoose.connection;
  }
    //new connection
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Connected to DB');
    return mongoose.connection;
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to the database');
  }
};
