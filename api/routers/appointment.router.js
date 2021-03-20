const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'danisecret';

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
        
        if (req.headers && req.headers.authorization) {
            const auth = req.headers.authorization;
            const token = auth.split(' ')[1]
            const payload = jwt.verify(token,secret)
    
            console.log(payload.clientId,'<============APPOINTMENT');
            const result = await appointmentController.findAllByClientId(payload.clientId);
            res.json({result,date: new Date})
        };

    } catch (error) {
        console.log(error);
    };
};

const createHandler = async (req,res) => {
    try {
        if (req.headers && req.headers.authorization) {
            const auth = req.headers.authorization;
            const token = auth.split(' ')[1]
            const payload = jwt.verify(token,secret)
            console.log(payload.clientId);
            let body = req.body
            body.clientId = payload.clientId
            const result = await appointmentController.create(body);
            console.log(result,'<====================RESULT!!')
            res.json({result,date: new Date});
        }    

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
router.get('/', findClientByIdHandler);
router.get('/all',appointmentAllHandler);
router.delete('/:id', deleteAppointmentHandler);

module.exports = router;