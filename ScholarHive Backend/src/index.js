import express from 'express';
import connectDB from './config/db.js';
import Scholarship from './models/Scholarship.js';
import cors from 'cors'

const app= express();

//Connect to MongoDB
await connectDB();

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}))

app.get("/", (req, res)=>{
    res.send("<h1>All Okay</h1>")
})

app.get("/scholarships", async (req, res)=>{
    const scholarshipsData= await Scholarship.find();
    res.json(scholarshipsData);
})

app.use((req, res)=>{
    res.status(404).send("<h1>Path Does Not Exist: 404</h1>")
})

const Port=process.env.PORT || 3001;

app.listen(Port, ()=>{
    console.log(`Running at http://localhost:${Port}`);
})