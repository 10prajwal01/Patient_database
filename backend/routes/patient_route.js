const express = require("express");
const router = express.Router();
const Patient = require("../model/patient");
const patientsController = require("../controllers/patients_controller")

router.get("/", patientsController.getAllPatients);
router.post("/", patientsController.addPatient);
router.get("/:id", patientsController.getById);
router.put("/:id", patientsController.updatePatient);
router.delete("/:id", patientsController.deletePatient);

module.exports = router;