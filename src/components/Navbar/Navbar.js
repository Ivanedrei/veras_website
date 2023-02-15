import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return <>
        <div className="Nav_1">
            <Link to="/" > Home </Link >
            <Link to="/gallery" > gallery </Link >
            <Link to="/about" > about us </Link >
            <Link to="/contact" > contact </Link >
        </div>
    </>
}