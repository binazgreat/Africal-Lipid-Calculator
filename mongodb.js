const mongoose = require('mongoose');

const uri = "mongodb+srv://Africal:Africal@cluster0.xld5xys.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri)
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });


const AfricalSchema=new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true },
    date: {type: Date, default: Date.now },
    
});

const collection=new mongoose.model('Collection1', AfricalSchema)

module.exports=collection;
