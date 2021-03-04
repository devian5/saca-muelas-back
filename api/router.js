const router = require('express').Router();
const appointmentRouter = require('./routers/appointment.router');

router.use('/appointment', appointmentRouter);


module.exports = router;