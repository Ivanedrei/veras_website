import React from "react"
import { Link } from "react-router-dom"
import { Home } from "../../Home"

export const Navbar = () => {
    return <>
        <Link to="/" > Home </Link >
        <Link to="/gallery" > gallery </Link >
        <Link to="/about" > about us </Link >
        <Link to="/contact" > contact </Link >
    </>
}