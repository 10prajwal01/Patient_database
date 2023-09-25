import { Button } from "@mui/material";
import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
       <center>
        <Button
          LinkComponent={Link}
          to="/patients"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          View All Patients
        </Button>
        </center>
    </div>
  )
}

export default Home