const catchError = require('../utils/catchError');
const Crud = require('../models/Crud');

const getAll = catchError(async(req, res) => {
    const results = await Crud.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Crud.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Crud.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Crud.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Crud.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}


module.exports = {
    getAll,
    create,
    remove,
    update,
}