const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAll(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query('CALL get_all(' + offset + ')');
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    return {
        data,
        meta
    }
}

async function getById(id){
    const rows = await db.query('CALL get_by_id(' + id + ')');
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

async function create(todo){
    const rows = await db.query(`CALL add_todo('` + todo.title + `', '` + todo.description + `', '` + todo.status + `')`);
    const data = helper.emptyOrRows(rows);
    return getAll();
}

async function update(id, todo){
    const rows = await db.query(`CALL update_todo('` + todo.title + `', '` + todo.description + `', '` + todo.status + `', ` + id +`)`);
    const data = helper.emptyOrRows(rows);
    return getAll();
}

async function remove(id){
    const rows = await db.query('CALL remove_todo(' + id + ')');
    const data = helper.emptyOrRows(rows);
    return getAll();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}
