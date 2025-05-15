import mongoose from 'mongoose';
import express from 'express';
const app = express();
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/Authentication")
    .then(() => console.log("✅ DB connected successfully"))
    .catch(err => console.error("❌ DB connection error:", err));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})
