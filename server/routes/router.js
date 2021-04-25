const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description add wine
 * @method GET/add-wine
 */
route.get('/add-wine', services.add_wine)

/**
 * @description update wine
 * @method GET/update-wine
 */
route.get('/update-wine', services.update_wine)

//API
route.post('/api/wines',controller.create);
route.get('/api/wines',controller.find);
route.put('/api/wines/:id',controller.update);
route.delete('/api/wines/:id',controller.delete);

module.exports = route