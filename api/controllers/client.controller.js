const { Client } = require('../models');

class ClientController {

    constructor() {

    }
    async indexAll() {
        return Client.findAll();

    }

    async create(){
        return Client.create();
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