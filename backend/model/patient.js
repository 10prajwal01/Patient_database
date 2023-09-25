const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    dateOfBirth: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    medicalHistory: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Patient",patientSchema);