const { Clinic } = require('../models');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'danisecret';
const bcrypt = require('bcryptjs');

class ClinicController {

    // async login(email,password) {
    //     const adminEmail = await Clinic.findOne({ where: { email }})
    //     const adminPassword = await Clinic.findOne({ where: { password }})
    //     if (!adminEmail === adminPassword) {
    //         throw new Error('Admin not found')
    //     }else {
    //         return adminEmail
    //     }
    // }


    async create(clinic){
        const userEmail = clinic.email;
        const found = await Clinic.findOne({ where: { email: userEmail } });
        if(found){
            throw new Error('Email already in use')
        }
        clinic.password = await bcrypt.hash(clinic.password,5);
        return Clinic.create(clinic);
    };

    async login(email,password){
        console.log('ENTRAMOS EN EL CONTROLLER');
        const clinic = await Clinic.findOne({where:{email}})
        if(!clinic){
            throw new Error('The email does not exist');
        };
        if(!await bcrypt.compare(password,clinic.password)){
            throw new Error('Wrong password');
        };
        const payload = {
            clinicId: clinic.id,
            tokenCreationDate: new Date,
            name: clinic.name,
            phone: clinic.phone,
        }
        console.log(payload);
        const token = jwt.sign(payload, secret);
        return {token,clinic}
    };


    async logOut(id) {
        const pepe = Clinic.findByPk(id);
        console.log(pepe);
        return pepe;
    };

}

const clinicController = new ClinicController();

module.exports = clinicController;