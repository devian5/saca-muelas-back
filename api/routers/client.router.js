const router = require('express').Router();
const clientController = require('../controllers/client.controller');


const loginHandler = async (req,res) => {
    try {
        const {email,password} = req.body;
        const jwt = await clientController.login(email,password);
        res.json({jwt})
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    };    
};

router.get('/', async(req, res) => {
    try {
        const result = await clientController.indexAll();
        res.json(result);
    } catch (error) {

        console.log(error)
    }
})

const clientAllHandler = async (req,res) => {
    try {
        const result = await clientController.indexAll();
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}

const findByIdHandler = async (req,res) => {
    try {
        const result = await clientController.findById(req.params.id);

        res.json({result,date: new Date})
    } catch (error) {
        console.log(error);
    };
};

const createHandler = async (req,res) => {
    try {
        const result = await clientController.create(req.body);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };  
};


router.post('/', createHandler);
router.get('/:id', findByIdHandler);
router.post('/login', loginHandler);
router.get('/', clientAllHandler);



module.exports = router;