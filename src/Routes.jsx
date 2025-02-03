import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import Service from "./container/Service";
import Contact from "./container/Contact"

function routes() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}

export default routes