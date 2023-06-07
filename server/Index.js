import express from "express";
import dotenv from 'dotenv';
import Connection from "./database/Db.js";
import defaultData from "./DataDeaf.js";
import Router from "./routes/Route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)
const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`server is runninign succsefully on port ${PORT}hello`))
defaultData();