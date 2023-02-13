import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>

    </>
}