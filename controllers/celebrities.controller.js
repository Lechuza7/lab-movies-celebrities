const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model')

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/list', { celebrities })
    })
    .catch(next)
}

module.exports.create = (req, res, next) => {
  res.render('celebrities/new')
}

module.exports.doCreate = (req, res, next) => {
  const data = { name, occupation, catchPhrase } = req.body

  Celebrity.create(data)
    .then(celebrity => {
      res.redirect('/celebrities')
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('celebrities/new', {
          errors: error.errors,
          celebrity: data,
        });
      } else {
        next(error);
      }
    })
}
