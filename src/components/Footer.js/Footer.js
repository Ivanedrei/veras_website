import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

export const Footer = () => {
    return <>
        <div className="flexy">
            <div className="footers footer1">
                <h6 className="footer_">GET STARTED TODAY</h6>
                <h1>Ready To Transform Your Home</h1>
                <h1> Into Your Dream Home?</h1>
            </div>
            <div className="footers">
                <button className="footer_btn">Schedule Consultation</button>
            </div>
        </div>
        <div className="black">
            <div className="footers footer2">
                <div className="flexer">
                    <h1>FOLLOW US</h1>
                </div>
                <div className="flexer">
                    <div className="footer_space">
                        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
                            alt="facebook" className="footer_icon" />
                        <Link to={"https://www.facebook.com/people/Veras-Custom-Cabinets/100063657056941/"} className="footer_font" >Facebook </Link>
                    </div>
                    <div className="footer_space">
                        <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png"
                            alt="facebook" className="footer_icon" />
                        <Link to={"https://www.instagram.com/veras.custom/"} className="footer_font">Instagram</Link>
                    </div>
                </div>
                <div className="flexer">
                    <h6>Copyright © All rights reserved.</h6>
                </div>
            </div>
        </div>
        {/* <div>
            <h6>Copyright © All rights reserved.</h6>
        </div> */}
    </>
}