const router = require('express').Router();
const clinicController = require('../controllers/clinic.controller');
const adminAuth = require('../middleware/adminAuth');


// const loginHandler = async (req,res) => {
//     try {
//         console.log(req.body,'<==========================================ROUTER')

//         const {email,password} = req.body;
//         const admin = await clinicController.login(email,password);
//         console.log(admin,'TEKKEEEEEN!!')

//         res.json({admin, date: new Date})
//     } catch (error) {
//         console.log(error)
//         return res.status(401).json({
//             message: error.message
//         });
//     };    
// };

const createHandler = async (req,res) => {
    try {
        console.log(req.body,'<==========================================')

        const result = await clinicController.create(req.body);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);
    };  
};

const loginHandler = async (req,res) => {
    try {
        console.log(req.body,'<==========================================ROUTER')
        const {email,password} = req.body;
        const jwt = await clinicController.login(email,password);
        console.log(jwt,'TOKEEEEEN!!')
        const token = jwt.token;
        const clinic = jwt.clinic
        res.json({token,clinic, date: new Date})
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: error.message
        });
    };    
};




const logOutHandler = async (req, res) =>{
    try {
        const id = req.params.id;
        const user =  await clinicController.logOut(id);
        console.log(user, "ESTO ES ESPARTUSER!!!!!!!!!!");
        const status = `Until the tooth fairy visits you, ${user.name}`;
        
        res.json({ status, id, date:new Date }); 
        
    }catch (error) {
        console.log(error,'ERROR DE COSAS DE PASAR')
    };
};


router.post('/',createHandler);
router.post('/login', loginHandler);
router.get('/logout/:id',adminAuth, logOutHandler);



module.exports = router;