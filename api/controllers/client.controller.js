const { Client } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const client = require('../models/client');
const secret = process.env.JWT_SECRET || 'danisecret';


class ClientController {

    async login(email,password){
        const user = Client.findOne({email})
        if(!user){
            throw new Error('The email does not exist');
        };
        if(!await bcrypt.compare(password,client.password)){
            throw new Error('Wrong password');
        };

        const payload = {
            clientId: client.Id,
            tokenCreationDate: new Date
        }
        return jwt.sign(payload, secret)
    };

    async indexAll() {
        return Client.findAll();
    };

    async create(client){
        return Client.create(client);
    };

    async findById(id) {
        return Client.findOne({ where: { id } });
    };

    async findAllByClientId(id) {
        return Client.findAll({ where: { clientId } });
    };
}

let clientController = new ClientController();

module.exports = clientController;