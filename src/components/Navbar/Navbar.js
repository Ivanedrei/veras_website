import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import "./Navbar.css"
import { Home } from "../../Home"

export const Navbar = () => {
    return <>
        <div className="Nav_1">

            <img src="https://static.vecteezy.com/system/resources/previews/013/707/220/original/abstract-initial-letter-gw-or-wg-logo-in-gold-color-isolated-in-black-background-applied-for-carpentry-business-logo-also-suitable-for-the-brands-or-companies-have-initial-name-wg-or-gw-vector.jpg"
                alt="logo" className="logo" />
            <Link to="/home" className="links"> Home</Link>
            <Link to="/gallery" className="links"> Gallery </Link >
            <Link to="/about" className="links"> About Us </Link >
            <Link to="/contact" className="links"> Contact </Link >

        </div>
    </>
}