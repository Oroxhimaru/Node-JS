const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema is the thing that define the structure of our documents 
//the modal is the thing that surround that and provide us with an interface by whiiich communicate with a database collection for that document type
const blogSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true
    },
  }, { timestamps: true });

  const Blog = mongoose.model('Blog', blogSchema);
  module.exports = Blog;