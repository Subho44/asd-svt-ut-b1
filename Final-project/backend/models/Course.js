const mongoose = require('mongoose');
const Module = require('node:module');

const courseschema = new mongoose.Schema({
    title:String,
    price:Number,
},
{timestamps:true});

module.exports = mongoose.model('course',courseschema);