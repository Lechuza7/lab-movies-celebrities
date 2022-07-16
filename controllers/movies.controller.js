const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");
const Movie = require("../models/movie.model");

module.exports.list = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/list", { movies });
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Movie.findById(req.params.id)
    .populate("mainCelebrity")
    .then((movie) => {
      if (movie) {
        res.render("movies/detail", { movie });
      } else {
        res.redirect("/");
      }
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("movies/new", { celebrities });
    })
    .catch(next);
};

module.exports.doCreate = (req, res, next) => {
  const data = ({ title, genre, plot, mainCelebrity } = req.body);

  Movie.create(data)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        Celebrity.find()
          .then((celebrities) => {
            res.render("movies/new", {
              errors: error.errors,
              movie: data,
              celebrities,
            });
          })
          .catch(next);
      } else {
        next(error);
      }
    });
};

module.exports.delete = (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(next);
};
