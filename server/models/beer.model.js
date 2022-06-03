import mongoose from "mongoose";

const beerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: true
    },
    tagline: String,
    category: String,
    volume: {
      type: Number,
      required: true
    },
    abv: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    countInStock: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
);


const BeerModel = mongoose.model('beer', beerSchema);
export default BeerModel;