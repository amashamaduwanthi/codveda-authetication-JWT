import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error(' MONGO_URI is not defined in .env file');
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as any);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(' MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
