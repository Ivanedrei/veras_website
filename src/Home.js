import React from "react";
import { Form, Link } from "react-router-dom";
import "./Home.css"

export const Home = () => {
    return <>
        <div>
            <img src="https://www.figtreehomes.com/wp-content/uploads/2022/07/designer-concept-unfinished-project-that-becomes-real-in-sanger-tx-1980x691.jpg"
                className="home_img" alt="kitchen1" />
        </div>

        <div className="flex home_1">
            <div>
                <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/190766654_10227370598990915_3192821753868813326_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=666b5a&_nc_ohc=vWrtVoufH3gAX9KRwDI&tn=4BdIeUrp3D-Bnfqz&_nc_ht=scontent-atl3-2.xx&oh=00_AfCmSK0ryj7_8sdKotJbABojwJCJyfpu0-96LcO-EHDQAg&oe=64133A39"
                    className="home_img1" alt="style1" />
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
                <button>request quote</button>
            </div>
        </div>

        <div className="row">
            <div className="home_p3">
                <h6>OUR SERVICES</h6>
                <h2>What We Do</h2>
            </div>
            <div className="home_p4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus elit nec enim dictum aliquet. In varius odio eget urna euismod eleifend. Sed non mollis eros. Sed tempus faucibus felis, sed commodo leo suscipit quis.
                    Pellentesque malesuada, turpis id posuere malesuada, ante orci efficitur massa, ac tempus quam enim sed felis. Nulla facilisi. Aliquam quis lacinia dolor. Vestibulum blandit mollis mauris ac venenatis.
                </p>
                <Link>See our Services >> </Link>
            </div>
        </div>

        <div>
            <div>
                <div>
                    Planning & Permitting
                </div>
                <div>
                    Architectural Design
                </div>
                <div>
                    Interior Design
                </div>
                <div>
                    Project Administration
                </div>
            </div>

            <div>
                <h2> - LATEST PROJECTS -</h2>
                <div>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <img></img>
                    </div>
                </div>
            </div>

            <div>
                <h2>WHAT CLIENTS SAY</h2>
                <div>
                    <img></img>
                </div>
            </div>
        </div>
    </>
}