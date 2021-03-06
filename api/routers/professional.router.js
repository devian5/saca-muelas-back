const router = require('express').Router();
const professionalController = require('../controllers/professional.controller');

const createHandler = async (req,res) => {
    try {
        const result = await professionalController.create(req.body);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };  
};

const findByIdHandler = async (req,res) => {
    try {
        const result = await professionalController.findProfessionalById(req.params.id);

        res.json({result,date: new Date})
    } catch (error) {
        console.log(error);
    };
};

const deleteProfessionalHandler = async (req,res) => {
    try {
        const result = await professionalController.deleteProfessionalById(req.params.id);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };
};

const findAppoimentByIdHandler = async (req,res) => {
    try {
        const result = await professionalController.findAllByProfessionalId(req.params.id);

        res.json({result,date: new Date})
    } catch (error) {
        console.log(error);
    };
};

const professionalAllHandler = async (req,res) => {
    try {
        const result = await professionalController.indexAll();

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };
};

router.post('/', createHandler);
router.get('/:id', findByIdHandler);
router.delete('/:id', deleteProfessionalHandler);
router.get('/', professionalAllHandler);
router.get('/appointment/:id', findAppoimentByIdHandler);

module.exports = router;