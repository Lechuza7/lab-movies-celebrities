const express = require('express');
const celebrities = require('../controllers/celebrities.controller');
const movies = require('../controllers/movies.controller');

const router = express.Router();

router.get('/celebrities/new', celebrities.create)
router.get('/celebrities', celebrities.list)
router.post('/celebrities', celebrities.doCreate)

router.get('/movies', movies.list)
router.get('/movies/new', movies.create)
router.post('/movies', movies.doCreate)
router.get('/movies/:id', movies.detail)
router.post('/movies/:id/delete', movies.delete)

router.get('/', (req, res) => {
  res.render('index', { title: 'Celebrities' })
})

module.exports = router;
