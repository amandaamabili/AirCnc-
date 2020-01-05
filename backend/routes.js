const express = require ('express');
const multer = require ('multer');
const uploadConfig = require('./src/config/upload');

const SessionController = require ('./src/controllers/SessionController');
const SpotController = require ('./src/controllers/SpotController');
const DashboardController = require ('./src/controllers/DashboardController');
const BookingController = require ('./src/controllers/BookingController');




const routes = express.Router();
const upload= multer(uploadConfig);//documentação multer


routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);

routes.post('/spots',upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);


module.exports = routes;