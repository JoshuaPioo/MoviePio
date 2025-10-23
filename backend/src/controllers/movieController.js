import Movie from "../models/Movie.js";

// ✅ Get all movies
export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching movies", error });
  }
};

// ✅ Create a new movie (Admin only)
export const createMovie = async (req, res) => {
  try {
    const { title, description, image, genre, year } = req.body;

    const movie = new Movie({
      title,
      description,
      image,
      genre,
      year,
      createdBy: req.user._id,
    });

    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ message: "Error creating movie", error });
  }
};

// ✅ Update a movie
export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error updating movie", error });
  }
};

// ✅ Delete a movie
export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting movie", error });
  }
};
