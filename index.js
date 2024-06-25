const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/save", (req,res) => {
   const url = "mongodb+srv://anushka3204:iyEz01H3FqL6qbYi@cluster0.rq7zqmu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
   const client = new MongoClient(url);
   const db = client.db("wn25june24");
   const coll = db.collection("student");
   const record = {"name":req.body.name,"choice":req.body.choice};
	console.log(record);
   coll.insertOne(record)
       .then(result =>res.send(result))
       .catch(error =>res.send(error));
});

app.listen(9000, () => { console.log("Ready to serve @9000 ..."); });
