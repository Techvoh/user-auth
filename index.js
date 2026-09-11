require('dotenv').config();

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require("express")
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes.js")
const  productRoute = require ("./routes/productRoutes.js")
const compass_string = "mongodb://localhost:27017/"
const dbURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5555;

mongoose.connect(dbURI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("Connection Error: ", err));


const app = express()
const port = 5555


app.use(express.json())

app.get("/" , (req, res) =>{
    res.send("Server is active")

})
app.use("/users", userRoute)
app.use("/products" , productRoute)
app.listen(port, ()=>{
    console.log(`Server is up and running on port : ${port}`)
})