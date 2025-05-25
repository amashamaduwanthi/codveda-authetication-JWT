import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/mongo-user-data-store';

dotenv.config();
const app = express();
app.use(express.json());

// Connect to database
connectDB();

app.use('/', (req, res) => {
  res.status(404).send('Not Found');
});

// Optional: start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
