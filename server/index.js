
import "./loadEnvironment.js";

import db from "./db/conn.js"
import todos from "./routes/todos.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const port = process.env.PORT;
const app = express();

db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

db.on("connected", () =>{
    console.log('Connected to MongoDB');

    app.listen(port, () => {
        console.log(`TopCrowdToDo app listening on port ${port}`)
    });

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.options('/todos', function (req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.end();
    });
    app.use("/todos", todos);


});









