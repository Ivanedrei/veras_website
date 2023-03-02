import React from "react";
import "./About.css"

export const About = () => {
    return <>
        <div className="flexing">
            <img src="https://media.istockphoto.com/id/1354262369/photo/mock-up-poster-frame-in-modern-interior-background-living-room-scandinavian-style-3d-render.jpg?s=612x612&w=0&k=20&c=7G6dCc14d2bby1YZmYOp5kIAY4AwWDvwHEC4En0l8iI="
                className="about_img" />
        </div>
        <div className="about_title">
            <h1 className="a_title">_About _Us</h1>
        </div>
        <div className="about_history">
            <h1 className="a_history">Our History</h1>
            <p className="a_p1">Thank You for looking to Vera's Custom Cabinets for your cabinetry and custom furniture needs.
                We are committed to providing you with the highest quality products and exceptional customer service.
                From your idea to the dream coming true, we are here to make your kitchen a gorgeous reality.
                You'll work directly with the people who build your cabinetry. We pride ourselves on helping our customers create the kitchen of their dreams.
                It's your vision that guides the process and your sense of taste that makes our kitchens unique.
                Add our expert craftsmen, fine materials, superb finishing and outstanding customer service, and the result will be a beautiful,
                durable and expertly constructed kitchen cabinetry that you can love and appreciate for a lifetime.</p>
        </div>
        <div className="about_container">
            <h3 className="a_service" >Services:</h3>
            {/* <div className="about_services"> */}
            <div className="a_ser">
                <p className="about_services">Interior design</p>
                <p className="about_services">Kitchen Remodel</p>
                <p className="about_services">Bathroom Remodel</p>
                <p className="about_services">Walk-in closet Remodel</p>
                <p className="about_services">Home/Office Remodel</p>
                <p className="about_services">Game/Rec Room Remodel</p>
                <p className="about_services">Wine Room Remodel</p>
                <p className="about_services">Whole-house Remodel</p>
                <p className="about_services">Home/garage additions</p>
            </div>
            {/* </div> */}
        </div >
        <div className="about_container">
            <div className="about_services">
                <h3 className="a_service">Our design Process:</h3>
                <h4 className="about_step">STEP BY STEP:</h4>
                <div>
                    <ul className="about">
                        <li>Let's discuss the project</li>
                        <li>Initial design presentation</li>
                        <li>Approval and procurement</li>
                        <li>Contracting work schedule</li>
                        <li>Delivery and installation</li>
                        <li>Final walkthrough</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="about_manage">
            <h2 >Managment team</h2>
        </div>
    </>
}