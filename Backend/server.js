const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const db=require('../Backend/config/db')
const route=require('../Backend/router/route')

dotenv.config();

const app=express();

// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true // Optional: Add this if you handle cookies/sessions
// }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


db();

app.use((err, req, res, next) => {
    console.error("SERVER ERROR:", err);

    res.status(500).json({
        message: err.message
    });
});

app.use('/api',route)

app.listen(process.env.PORT,()=>{console.log(`Server is running on port ${process.env.PORT}`)})

