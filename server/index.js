
import "./loadEnvironment.js";

import db from "./db/conn.js"
import todos from "./routes/todos.js";
import express from "express";
import bodyParser from "body-parser";


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

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/todos", todos);


});









