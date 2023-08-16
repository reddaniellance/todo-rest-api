const express = require('express');
const router = express.Router();
const todo = require('../services/todo');

/* GET TODOS */
router.get('/', async function(req, res, next) {
    try {
        res.json(await todo.getAll(req.query.page));
    } catch (err) {
        console.error(`Error: `, err.message);
        next(err);
    }
});

/* GET BY ID */
router.get('/:id', async function(req, res, next) {
    try {
        res.json(await todo.getById(req.params.id));
    } catch (err) {
        console.error(`Error: `, err.message);
        next(err);
    }
});

/* Create TODO */
router.post('/', async function(req, res, next) {
    try {
        res.json(await todo.create(req.body));
    } catch (err) {
        console.error(`Error: `, err.message);
        next(err);
    }
});

/* Update TODO */
router.put('/:id', async function(req, res, next) {
    try {
        res.json(await todo.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error: `, err.message);
        next(err);
    }
});

/* Delete TODO */
router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await todo.remove(req.params.id));
    } catch (err) {
        console.error(`Error: `, err.message);
        next(err);
    }
});

module.exports = router;