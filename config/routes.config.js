const express = require('express');

const router = express.Router();

const { celebrities, movies, misc } = require("../controllers");

router.get("/", misc.index);

router.get("/celebrities/new", celebrities.create);
router.post("/celebrities/create", celebrities.doCreate);
router.get("/celebrities", celebrities.list);

router.get("/movies/new", movies.create);
router.post("/movies", movies.doCreate);
router.get("/movies", movies.list);
router.get("/movies/:id/detail", movies.detail);
router.post("/movies/:id/delete", movies.delete);
router.get("/movies/:id/edit", movies.edit);
router.post("/movies/:id/edit", movies.doEdit);



module.exports = router;

