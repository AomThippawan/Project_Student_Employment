const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{}).then(()=>{
    console.log("MongoDB connected");
}).catch(err => console.log(err));

const postRoutes = require("./routes/post");
app.use("/api/post", postRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running on port ${port}`));