const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller');

router.get('/', async (req,res) => {
    try {
        
        const result = await appointmentController.indexAll()
        res.json({result,date: new Date})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;