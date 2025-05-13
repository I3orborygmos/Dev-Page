import React from 'react'
import { BrowserRouter, Routes, Route, Link,Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./home"
import Websites from "./websites"
import Resume from "./resume"

export default function MyNav () {
    return (
<BrowserRouter>
<Navbar expand="lg" bg='color' >
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className='mx-auto'>
        <Nav.Link as ={Link} to="/" exact>Home</Nav.Link>
        <Nav.Link as ={Link} to= "/websites">Websites</Nav.Link>
        <Nav.Link as ={Link} to= "/resume">Resume</Nav.Link>
        <Nav.Link a href='https://github.com/I3orborygmos' target='_blank'>GitHub</Nav.Link>
        <Nav.Link a href='https://www.linkedin.com/in/itsmeconnor/' target='_blank'>Linkeden</Nav.Link>
    </Nav>
</Navbar.Collapse>
</Navbar>
        <div>
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route index element = {<Home />} />
                <Route path = "/websites" element= {<Websites />} />
                <Route path = "/resume" element ={<Resume />} />
            </Route>
        </Routes>
        </div>
</BrowserRouter>
    )
}