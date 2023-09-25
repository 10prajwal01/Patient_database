import {
    Button,
    FormLabel,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AddPatient = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({      
      name: "",
      dateOfBirth: "",
      gender: "",
      contact: "",
      medicalHistory: "",
    });
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:3000/patients", {
          name: String(inputs.name),
          dateOfBirth: String(inputs.dateOfBirth),
          gender: String(inputs.gender),
          contact: Number(inputs.contact),
          medicalHistory: String(inputs.medicalHistory),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(() => history("/patients"));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <FormLabel>Date Of Birth</FormLabel>
          <TextField
            value={inputs.dateOfBirth}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
          />
          <FormLabel>Gender</FormLabel>
          <TextField
            value={inputs.gender}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />
          <FormLabel>Contact</FormLabel>
          <TextField
            value={inputs.contact}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <FormLabel>Medical History</FormLabel>
          <TextField
            value={inputs.medicalHistory}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />
          
  
          <Button variant="contained" type="submit">
            Add Patient
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddPatient;