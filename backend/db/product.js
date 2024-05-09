import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  category: { type: String },
  company: { type: String },
});

export default mongoose.model("products", productSchema);

// A schema is a blueprint for defining the structure of documents within a collection in MongoDB.
// The file imports the mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.