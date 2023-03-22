const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const reistrationRoutes = require('./routes/Registration') 
app.use(reistrationRoutes);
app.use(bodyParser.json());
app.use(cors());


const PORT = 8000;
const URL = "mongodb+srv://chinthaka99:37uZ64BUbBLu7N2n@cakeshop.ivawa30.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect (URL)
.then(()=>{
  console.log("Cennected")
})

.catch((err)=>{
  console.log('DB error', err)
})

app.listen(PORT, ()=>{
  console.log(`Server is running in port: ${PORT}`);
})
