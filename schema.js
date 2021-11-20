//import mongoose from 'mongoose';
const  mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  title:  String,
  author: String
});

module.exports = mongoose.model("myschema",schema,"SL-Lab-11")