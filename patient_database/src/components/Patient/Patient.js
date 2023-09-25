import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Patient = (props) => {
  const history = useNavigate();
  const {_id, name, dateOfBirth, gender, contact, medicalHistory } = props.patient;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3000/patients/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/patients"));
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <h3>{dateOfBirth}</h3>
      <h3>{contact}</h3>
      <h3>{gender}</h3>
      <p>{medicalHistory}</p>
      <Button LinkComponent={Link} to={`/patients/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Patient;