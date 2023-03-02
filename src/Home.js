import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

export const Home = () => {
    return <>
        {/* INTRO_IMAGE */}
        <div>
            <img src="https://www.figtreehomes.com/wp-content/uploads/2022/07/designer-concept-unfinished-project-that-becomes-real-in-sanger-tx-1980x691.jpg"
                className="home_img" alt="kitchen1" />
        </div>
        {/* OUR_SERVICES */}
        <div className="home_p3">
            <div>
                <h6>OUR SERVICES</h6>
                <h2>What We Do</h2>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus elit nec enim dictum aliquet. In varius odio eget urna euismod eleifend. Sed non mollis eros. Sed tempus faucibus felis, sed commodo leo suscipit quis.
                    Pellentesque malesuada, turpis id posuere malesuada, ante orci efficitur massa, ac tempus quam enim sed felis. Nulla facilisi. Aliquam quis lacinia dolor. Vestibulum blandit mollis mauris ac venenatis.
                </p>
                <Link>See our Services >> </Link>
            </div>
        </div>
        {/* REQUEST_QUOTE */}
        <div className="flex">
            <div>
                <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/190766654_10227370598990915_3192821753868813326_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=666b5a&_nc_ohc=vWrtVoufH3gAX9KRwDI&tn=4BdIeUrp3D-Bnfqz&_nc_ht=scontent-atl3-2.xx&oh=00_AfCmSK0ryj7_8sdKotJbABojwJCJyfpu0-96LcO-EHDQAg&oe=64133A39"
                    className="home_img1 img_center" alt="style1" />
            </div>
            <div className="home_p1">
                <h6>WE'LL HELP YOU FIND YOUR STYLE</h6>
                <p className="home_p2">We don't leave your vision up to interpretation.
                    As both architects and builders, we won't need a translator
                    to understand the intention behind your design.
                    In keeping the team integrated from beginning to end,
                    we ensure that the details are never lost and
                    that the execution meets your expectations — every time.</p>
                {/* <h2>request a quote today</h2> */}
                {/* <p>LET OUR TEAM WORK TO CREATE YOUR DREAM KITCHEN/ ROOM FROM A BROAD RANGE OF FINISHES AND STYLES</p> */}
                <button className="btn">Request Quote</button>
            </div>
        </div>
        {/* DO_ICONS */}
        <div className="relative">
            <div className="flex home_icons">
                <div className="center">
                    <img src="https://cdn3.iconfinder.com/data/icons/business-intelligence-2/64/data-architecture-model-system-design-organization-business-512.png"
                        alt="Architect" className="home_icon home_icon1" />
                    <h3 className="center center1">Planning & Permitting</h3>
                </div>
                <div className="center">
                    <img src="https://cdn0.iconfinder.com/data/icons/freelancer-2/512/architecture-plan-design-freelance-512.png"
                        alt="Architect" className="home_icon home_icon2" />
                    <h3 className="center center2">  Architectural Design</h3>
                </div>
                <div className="center">
                    <img src="https://cdn3.iconfinder.com/data/icons/home-office-interior-furniture/50/7-512.png"
                        alt="Architect" className="home_icon home_icon3" />
                    <h3 className="center center3">Interior Design</h3>
                </div>
                <div className="center">
                    <img src="https://cdn4.iconfinder.com/data/icons/thin-office/24/thin-1575_project_management_tasks-512.png"
                        alt="Architect" className="home_icon home_icon4" />
                    <h3 className="center center4">Project Administration</h3>
                </div>
            </div>
            {/* LATEST_PROJECTS */}
            <div className="position">
                <h1 className="home_title"> - LATEST PROJECTS -</h1>
                <div className="flex home_projects">
                    <div>
                        <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/330152940_925679771942745_9160933584388797392_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=s1TAM-d9VLcAX9ycbN9&tn=4BdIeUrp3D-Bnfqz&_nc_ht=scontent-atl3-2.xx&oh=00_AfCPNTf4oHDTV29Nr5F3o3Xbt3erkJuZ_7D0VWDA5MaeZQ&oe=63F1982A"
                            alt="project" className="home_project1" loading="lazy"></img>
                    </div>
                    {/* <div>
                        <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/330141990_741953144229144_8625730678350859641_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-bOtPZwJUlQAX-MIVha&_nc_ht=scontent-atl3-2.xx&oh=00_AfA8gqQGqBTxJeHF7SBgV5ItjjPYwiSARoY2dHYTHb3CFw&oe=63F1DE99"
                            alt="project" className="home_project1"></img>
                    </div> */}
                    <div>
                        <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/326545297_740601094075758_689184347791975401_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2EPgNXIyYA8AX9xscq2&_nc_ht=scontent-atl3-2.xx&oh=00_AfBaKEIl1P7wcaYdJTdKLlurRuHyEUrF8OBBvfPkjahn0w&oe=63F27133"
                            alt="project" className="home_project1" loading="lazy"></img>
                    </div>
                    <div>
                        <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/299817100_431845285565151_4032387736950275799_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pgEcGD8ZjAIAX-yOQEd&tn=4BdIeUrp3D-Bnfqz&_nc_ht=scontent-atl3-2.xx&oh=00_AfADdhUacmitoHw-4vHkY8pCWixOy7g1u5NF80h3OFsWDw&oe=63F3AF50"
                            alt="project" className="home_project1" loading="lazy"></img>
                    </div>
                    {/* <div>
                        <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/326855305_1144891079553504_1477164379149292389_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-g2tTMqAVXgAX9-N6id&_nc_ht=scontent-atl3-2.xx&oh=00_AfDeyTZZ13CAzzCoyOa6rc5TXU-DPDTJE_7lKoUbVimlWQ&oe=63F1DD58"
                            alt="project" className="home_project1"></img>
                    </div> */}
                </div>
            </div>
        </div>

        <div className="spacer">

        </div>
        {/* REVIEWS */}
        {/* <div>
            <h2>WHAT CLIENTS SAY</h2>
            <div>
                {Slider()}
            </div>
        </div> */}
    </>
}