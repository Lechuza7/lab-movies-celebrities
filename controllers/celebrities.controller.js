const mongoose = require("mongoose");
const { Celebrity } = require("../models");

module.exports.create = (req, res, next) => {
    res.render("celebrities/new-celebrity")
}

module.exports.doCreate = (req, res, next) => {
    const celebrity = req.body

    Celebrity.create(celebrity)
        .then((celebrity) => {
            res.redirect("/celebrities")
        })
        .catch((err) => {
            res.render("celebrities/new-celebrity")
        })
}

module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then((celebrities) => res.render("celebrities/celebrities", { celebrities }))
        .catch(err => next(err))
}