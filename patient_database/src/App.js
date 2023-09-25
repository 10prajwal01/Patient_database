import Header from "./components/header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddPatient from "./components/AddPatient";
import Patients from "./components/Patient/Patients";
import PatientDetail from "./components/Patient/PatientDetail";

function App() {
  return (
    <React.Fragment>
    <header>
      <Header></Header>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddPatient />} exact />
        <Route path="/patients" element={<Patients />} exact />
        <Route path="/patients/:id" element={<PatientDetail />} exact />
      </Routes>
    </main>
    </React.Fragment>
  );
}

export default App;
