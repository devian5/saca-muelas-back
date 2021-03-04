const { Appointment } = require('../models');

class AppointmentController {

    async indexAll() {
        return Appointment.findAll();
    }

    async findById(id) {
        return Appointment.findOne({ where: { id } });
    }

<<<<<<< HEAD
    async findAllByClientId(clientId) {
=======
    async findAllByClientId(id) {
>>>>>>> ea828091a182fbcf84463e5286c5455b93490e83
        return Appointment.findAll({ where: { clientId } });
    }
}

let appointmentController = new AppointmentController();

module.exports = appointmentController;