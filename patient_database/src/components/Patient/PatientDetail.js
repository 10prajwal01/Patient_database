import {
    Box,
    Button,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const PatientDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:3000/patients/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.patient));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:3000/patients/${id}`, {
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
      sendRequest().then(() => history("/patients"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
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
                Update Patient
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default PatientDetail;