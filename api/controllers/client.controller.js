const { Client } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.JWT_SECRET || 'danisecret';


class ClientController {

    async login(email,password){
        const client = await Client.findOne({where:{email}})
        if(!client){
            throw new Error('The email does not exist');
        };
        if(!await bcrypt.compare(password,client.password)){
            throw new Error('Wrong password');
        };

        const payload = {
            clientId: client.id,
            tokenCreationDate: new Date
        }
        return jwt.sign(payload, secret)
    };

    async indexAll() {
        return Client.findAll();
    };

    async create(client){
        client.password = await bcrypt.hash(client.password,5);
        return Client.create(client);
    };

    async findById(id) {
        return Client.findOne({ where: { id } });
    };

    async logOut(id) {
        return Client.findByPk(id);
    };

    async deleteClientById(id) {
        return Client.destroy({where: { id }} )
    }

}

const clientController = new ClientController();

module.exports = clientController;