const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller');

const appointmentAllHandler = async (req,res) => {
    try {
        const result = await appointmentController.indexAll();

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };

};

const findClientByIdHandler = async (req,res) => {
    try {
        const result = await appointmentController.findAllByClientId(req.params.id);

        res.json({result,date: new Date})
    } catch (error) {
        console.log(error);
    };
};

const createHandler = async (req,res) => {
    try {
        const result = await appointmentController.create(req.body);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };
    
};

const deleteAppointmentHandler = async (req,res) => {
    try {
        const result = await appointmentController.deleteFutureAppointmentById(req.params.id);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };
};


router.post('/', createHandler);
router.get('/:id', findClientByIdHandler);
router.get('/',appointmentAllHandler);
router.delete('/:id', deleteAppointmentHandler);

module.exports = router;