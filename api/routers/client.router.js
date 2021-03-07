const router = require('express').Router();
const clientController = require('../controllers/client.controller');
const auth = require('../middleware/auth');


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

const logOutHandler = async (req, res) =>{
    try {
        const id = req.params.id;
        const user =  await clientController.logOut(id);
        const status = `Until the tooth fairy visits you, ${user.name}`;
        
        res.json({ status, id, date:new Date }); 
        
    }catch (error) {
        console.log(error)
    };
};

const deleteClientHandler = async (req,res) => {
    try {
        const result = await clientController.deleteClientById(req.params.id);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };
};

router.post('/', createHandler);
router.get('/:id', findByIdHandler);
router.post('/login', loginHandler);
router.get('/', clientAllHandler);
router.get('/logout/:id', auth, logOutHandler);
router.delete('/:id', deleteClientHandler);

module.exports = router;