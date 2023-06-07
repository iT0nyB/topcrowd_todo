import express from 'express';
import db from '../db/conn.js';
import { ObjectId } from "mongodb";

const router = express.Router();


router.get("/", async (req, res) => {
    let collection = await db.collection("todos");
    const {page, pageSize} = req.query;
    const skip = (page - 1) * pageSize;
    const limit = parseInt(pageSize);
    let results = await collection.find({})
        .skip(skip)
        .limit(limit)
        .toArray();

    let totalCount = await collection.countDocuments({});

    const paginatedObj = {
        data: results,
        total: totalCount,
        totalPages: Math.ceil(totalCount/pageSize)
    }

    res.send(paginatedObj).status(200);
});

router.get("/:id", async (req, res) => {
    let collection = await db.collection("todos");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    let collection = await db.collection("todos");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

router.put("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
        $set: { ...req.body }
    };

    let collection = await db.collection("todos");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
});

router.delete("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("todos");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
});


export default router;
