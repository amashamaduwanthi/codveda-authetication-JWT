import express from 'express';
const app = express();
app.use(express.json())
app.listen(3005, (err=>{
    console.log("Server running on port 3005");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})



