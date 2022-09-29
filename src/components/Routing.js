import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../containers/About';
import Home from '../containers/Home'
import Project from '../containers/Project';
import Skills from '../containers/Skills';
import Contact from '../containers/Contact';



function Routing() {
  return (
    <Routes>
       <Route path="/" element={<Home/>}Exact/>
       <Route path="/about" element={<About/>}/>
       <Route path="/skills" element={<Skills/>}/>
       <Route path='/project' element={<Project/>}/>
       <Route path='/contact' element={<Contact/>}/>
     </Routes>


  )
}

export default Routing