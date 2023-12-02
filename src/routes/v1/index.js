const express = require('express');
const { InfoController } = require('../../controllers');
const router = express.Router();
const AirplaneRoutes = require('./airplane-route');

router.use('/airplanes',AirplaneRoutes);
router.get('/info', InfoController.info);

module.exports = router;