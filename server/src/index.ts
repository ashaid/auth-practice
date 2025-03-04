import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

console.log(`app initialized on ${PORT}`)

app.get("/", (req, res) => {
    res.json({message: "Hello"})
})

