import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return <>
        <div>
            hello world!
        </div>
        <div>
            <h6>WE'LL HELP YOU FIND YOUR STYLE</h6>
            <p>We don't leave your vision up to interpretation.
                As both architects and builders, we won't need a translator
                to understand the intention behind your design.
                In keeping the team integrated from beginning to end,
                we ensure that the details are never lost and
                that the execution meets your expectations — every time.</p>
            <h2>request a quote today</h2>
            <p>LET OUR TEAM WORK TO CREATE A DREAM ROOM FROM A BROAD RANGE OF FINISHES AND STYLES</p>
            <button>request quote</button>
        </div>
        <div>
            <div>
                <h6>OUR SERVICES</h6>
                <h2>What We Do</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus elit nec enim dictum aliquet. In varius odio eget urna euismod eleifend. Sed non mollis eros. Sed tempus faucibus felis, sed commodo leo suscipit quis.
                    Pellentesque malesuada, turpis id posuere malesuada, ante orci efficitur massa, ac tempus quam enim sed felis. Nulla facilisi. Aliquam quis lacinia dolor. Vestibulum blandit mollis mauris ac venenatis.
                </p>
                <Link>See our Services >> </Link>
            </div>
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