const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();

app.use(cors());

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function startServer() {

    await client.connect();

    console.log("MongoDB Connected");

    const db = client.db("company");

    const collection = db.collection("sales");

    app.get("/sales", async (req, res) => {

        const data = await collection.find().toArray();

        res.json(data);

    });

    app.listen(5000, () => {

        console.log("Server running on port 5000");

    });

}

startServer();