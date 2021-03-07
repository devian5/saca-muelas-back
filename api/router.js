const router = require('express').Router();
const appointmentRouter = require('./routers/appointment.router');
const clientRouter = require('./routers/client.router');
professionalRouter = require('./routers/professional.router');

//REST RESOURCES
router.use('/appointment', appointmentRouter);
router.use('/clients', clientRouter);
router.use('/professional', professionalRouter)

module.exports = router;