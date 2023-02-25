import React from 'react'
import "./index.css"
import Navbar from './Navbar/Navbar'
import { Routes } from 'react-router-dom';
import {  BrowserRouter as Router, Route} from "react-router-dom";
import SideNavbar from './SideNavbar/SideNavbar';
import HumanResources from './HumanResources/HumanResources'
import Employee from './Employee/Employee'

export default function App() {
  return (
    <div>
        <Navbar name="Aryan"/>
        <Routes>
        <Route path='/' element={<SideNavbar heading='Admin'/>}/>
        <Route path='/human-resources' element={<HumanResources heading='HR'/>}/>
        <Route path='/employee' element={<Employee heading='Employee'/>}/>
        </Routes>
    </div>
  )
}
