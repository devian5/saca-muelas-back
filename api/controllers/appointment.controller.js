const { Appointment } = require('../models');

class AppointmentController {

    constructor() {

    }
    async indexAll() {
        return Appointment.findAll();

    }

    async findById(id) {
        return Appointment.findOne({ where: { id } });
    }

    async findAllByClientId(iso) {
        return Appointment.findAll({ where: { clientId } });
    }
}

let appointmentController = new AppointmentController();

module.exports = appointmentController;