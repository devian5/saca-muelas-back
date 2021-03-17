const { Appointment } = require('../models');

class AppointmentController {

    async create(appointment){
        return Appointment.create(appointment)
    };

    async indexAll() {
        
        return Appointment.findAll();
    };


    async findAllByClientId(clientId) {
        return Appointment.findAll({ where: { clientId } });
    };

    async deleteFutureAppointmentById(id) {
        return Appointment.destroy({where: { id } });
    };
};

const appointmentController = new AppointmentController();

module.exports = appointmentController;