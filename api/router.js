const router = require('express').Router();
const appointmentRouter = require('./routers/appointment.router');

router.use('/appointment', appointmentRouter);


const clientRouter = require('./routers/client.router');
//const appointmentRouter = require(',/routers/appointment.router')
//REST RESOURCES
router.use('/clients', clientRouter);
module.exports = router;