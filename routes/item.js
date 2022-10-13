const express = require("express");

// to access the POST request data
const {
    getAllItems,
    postItem,
    deleteItem,
    getList,
  } = require('../controllers/item');

const routes = express.Router();

// importing models 
const Item = require("../models/item");
const List = require("../models/list");

//GET
routes.get('/', getAllItems)

//CREATE
routes.post('/', postItem)

//DELETE
routes.post('/delete', deleteItem)

//SINGLE LIST
routes.get('/:id', getList)

module.exports = routes;







