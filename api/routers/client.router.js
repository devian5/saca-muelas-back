const router = require('express').Router();
//const appointmentRouter = require('./appointment.router');
const clientController = require('../controllers/client.controller');

//CLIENT RESOURCES





//CLIENT ENDPOINTS

router.get('/', async(req, res) => {
    try {
        const result = await clientController.indexAll();
        res.json(result);
    } catch (error) {

        console.log(error)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const result = await clientController.findById(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({
            error: 'error',
            message: 'error'
        })
    }
})

router.post('/', async (req,res) => {
    try {
        console.log(req.body);
        const result = await clientController.create(req.body);
        res.json({result,date: new Date});
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;