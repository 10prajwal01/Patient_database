const Patient = require("../model/patient")


const getAllPatients = async(req, res, next) => {
    let patients;
    try{
        patients = await Patient.find();
    }catch(err){
        console.log(err);
    }

    if(!patients){
        return res.status(404).json({message:"No patients found"});
    }
    return res.status(200).json({patients});
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    let patient;
    try {
      book = await Patient.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "No Patient found" });
    }
    return res.status(200).json({ patient });
  };
  

const addPatient = async(req, res, next)=>{
    const { name, dateOfBirth, gender, contact, medicalHistory} = req.body;
    let patient;
    try{
        patient = new Patient({
            name,
            dateOfBirth,
            gender,
            contact,
            medicalHistory
        });
        await patient.save(); 
    }catch(err){
        console.log(err);
    }
    if(!patient){
        return res.status(500).json({message:'Unable to Add'})
    }
    return res.status(201).json({patient})
};

const updatePatient = async (req, res, next) => {
    const id = req.params.id;
    const { name, dateOfBirth, gender, contact, medicalHistory} = req.body;
    let patient;
    try {
      patient = await Patient.findByIdAndUpdate(id, {
        name,
        dateOfBirth,
        gender,
        contact,
        medicalHistory
        });
      patient = await patient.save();
    } catch (err) {
      console.log(err);
    }
    if (!patient) {
      return res.status(404).json({ message: "Unable To Update by ID" });
    }
    return res.status(200).json({ patient });
  };

  const deletePatient = async (req, res, next) => {
    const id = req.params.id;
    let patient;
    try {
      patient = await Patient.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!patient) {
      return res.status(404).json({ message: "Unable To Delete By ID" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
  };


exports.getById = getById;
exports.getAllPatients = getAllPatients;
exports.addPatient = addPatient;
exports.updatePatient = updatePatient;
exports.deletePatient = deletePatient;