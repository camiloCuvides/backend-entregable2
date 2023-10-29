const { getAll, create, remove, update } = require('../controllers/crud.controllers');
const express = require('express');

const crudRouter = express.Router();

crudRouter.route("/")
		.get(getAll)
        .post(create);

crudRouter.route("/:id")
        .delete(remove)
        .put(update);

module.exports = crudRouter;