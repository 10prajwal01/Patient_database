import React, {useState} from 'react'
import { AppBar, Toolbar, Tab, Tabs } from '@mui/material';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
            <NavLink to="/" style={{ color: "white" }}></NavLink>
                <Tabs textColor="inherit" indicatorColor="primary" value={value} onChange={(e, val) => setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label='Add Patient'></Tab>
                    <Tab LinkComponent={NavLink} to="/patients" label='Patients'></Tab>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;