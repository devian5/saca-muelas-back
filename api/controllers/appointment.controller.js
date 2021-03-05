const { Appointment } = require('../models');

class AppointmentController {

    async indexAll() {
        return Appointment.findAll();
    }

    async create(appointment){
        return Appointment.create(appointment)
    }

    async findById(id) {
        return Appointment.findOne({ where: { id } });
    }

    async findAllByClientId(clientId) {
        return Appointment.findAll({ where: { clientId } });
    }
}

let appointmentController = new AppointmentController();

module.exports = appointmentController;