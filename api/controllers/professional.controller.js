const { Professional } = require('../models');

class ProfessionalController {

    async create(professional){
        return Professional.create(professional)
    };

    async indexAll() {
        return Professional.findAll();
    };


    async findProfessionalById(id) {
        return Professional.findAll({ where: { id } });
    };

    async deleteProfessionalById(id) {
        return Professional.destroy({where: { id } });
    };

    async findAllByProfessionalId(professionalId) {
        return Client.findAll({ where: { professionalId } });
    };

};

const professionalController = new ProfessionalController();

module.exports = professionalController;