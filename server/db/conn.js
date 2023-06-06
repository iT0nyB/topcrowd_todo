import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "";


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

export default db;
