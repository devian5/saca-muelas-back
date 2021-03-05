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

router.post('/', async (req,res) => {
    try {
        console.log(req.body);
        const result = await appointmentController.create(req.body);
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;