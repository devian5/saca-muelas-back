const router = require('express').Router();
const appointmentRouter = require('./routers/appointment.router');
const clientRouter = require('./routers/client.router');

//REST RESOURCES
router.use('/appointment', appointmentRouter);
router.use('/clients', clientRouter);


module.exports = router;