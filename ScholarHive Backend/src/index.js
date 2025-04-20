import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors'
import Scholarship from './models/scholarship.model.js';
import authRoutes from './routes/auth.routes.js'

const app= express();

//Connect to MongoDB
await connectDB();

app.use(cors({
    origin: process.env.ORIGIN,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.send("<h1>All Okay</h1>")
})

app.use('/api/auth', authRoutes);

app.get("/api/scholarships", async (req, res)=>{
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