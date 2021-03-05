const { Client } = require('../models');

class ClientController {

   
    async indexAll() {
        return Client.findAll();
    }

    async create(client){
        return Client.create(client);
    }

    async findById(id) {
        return Client.findOne({ where: { id } });
    }

    async findAllByClientId(id) {
        return Client.findAll({ where: { clientId } });
    }
}

let clientController = new ClientController();

module.exports = clientController;