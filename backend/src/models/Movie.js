import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
  image: String,
  season: Number,
  episodes: [String]
});

export default mongoose.model("Movie", movieSchema);
