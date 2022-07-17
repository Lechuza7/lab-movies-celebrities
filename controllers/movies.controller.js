const { Celebrity, Movie } = require("../models");


module.exports.create = (req, res, next) => {
    Celebrity.find()
        .then((celebrities) => {
            res.render("movies/new-movie", { celebrities })
        })
        .catch(err => next(err))
}

module.exports.doCreate = (req, res, next) => {
    const movie = ({title, genre, plot, mainCelebrity} = req.body)

    Movie.create(movie) 
        .then(() => {
            res.redirect("/movies")
        })
        .catch(err => next(err))
}

module.exports.list = (req, res, next) => {
    Movie.find()
        .then((movies) => res.render("movies/movies", { movies }))
        .catch(err => next(err))
}

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
        .populate("mainCelebrity")
        .then((movie) => {
            if (movie) {
                res.render("movies/movie-detail", { movie })
            } else {
                res.redirect("/")
            }
        })
        .catch(err => next(err))
}

module.exports.delete = (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/movies")
        })
        .catch(err => next(err))
}

module.exports.edit = (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => {
            if (movie) {
                return Celebrity.find()
                    .then((celebrities) => {
                        res.render("movies/edit-movie", { movie, celebrities }) 
                    })
            } else {
                res.redirect("/movies")
            }
        })
        .catch((err) => next(err))
}

module.exports.doEdit = (req, res, next) => {
    const movie = ({title, genre, plot, mainCelebrity} = req.body)

    Movie.findByIdAndUpdate(req.params.id, movie) 
        .then((movie) => {
            res.redirect(`/movies/${movie.id}/detail`)
        })
        .catch(err => next(err))
}