import React from "react";
import "./About.css"

export const About = () => {
    return <>
        <div className="flexing">
            <img src="https://media.istockphoto.com/id/1354262369/photo/mock-up-poster-frame-in-modern-interior-background-living-room-scandinavian-style-3d-render.jpg?s=612x612&w=0&k=20&c=7G6dCc14d2bby1YZmYOp5kIAY4AwWDvwHEC4En0l8iI="
                className="about_img" />
        </div>
        <div className="about_title">
            <h1 className="a_title">About Us</h1>
        </div>
        <div className="about_history">
            <h2 className="a_history">Our History</h2>
            <p className="a_p1">Thank You for looking to Vera's Custom Cabinets for your cabinetry and custom furniture needs.
                We are committed to providing you with the highest quality products and exceptional customer service.
                From your idea to the dream coming true, we are here to make your kitchen a gorgeous reality.
                You'll work directly with the people who build your cabinetry. We pride ourselves on helping our customers create the kitchen of their dreams.
                It's your vision that guides the process and your sense of taste that makes our kitchens unique.
                Add our expert craftsmen, fine materials, superb finishing and outstanding customer service, and the result will be a beautiful,
                durable and expertly constructed kitchen cabinetry that you can love and appreciate for a lifetime.</p>
        </div>
        <div className="about_container">
            <div className="about_services">
                <h2 className="a_service" >Services:</h2>
                <ul className="a_ser">
                    <li>Interior design</li>
                    <li>Kitchen Remodeling</li>
                    <li>Bathroom Remodeling</li>
                    <li>Walk-in closet Remodeling</li>
                    <li>Home/Office Remodeling</li>
                    <li>Game & Rec Room Remodeling</li>
                    <li>Wine Room Remodeling</li>
                    <li>Whole-house Remodeling</li>
                    <li>Home/garage additions</li>
                </ul>
            </div>

            <div className="about_services">
                <h2 className="a_service">Our design Process:</h2>
                <h3 className="about">Step by Step:</h3>
                <div className="about">
                    <div>1. Let's discuss the project</div>
                    <div>2. Initial design presentation</div>
                    <div>3. Approval and procurement</div>
                    <div>4. Contracting work schedule</div>
                    <div>5. Delivery and installation</div>
                    <div>6. Final walkthrough</div>
                </div>
            </div>
        </div>

        <div className="about_manage">
            <h2 >Managment team</h2>
        </div>
    </>
}