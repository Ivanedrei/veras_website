import React from "react"
import "./Slider.css"

let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 3000); // Change image every 3 seconds
// }

const slideshowContainer = () => {
    const slider = {
        maxWidth: 1000 + "px",
        position: "relative",
        margin: "auto"
    }
}

export const Slider = () => {
    return <>
        <h2>Automatic Slideshow</h2>

        <div>

            <div className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    style={{ width: "40em" }} id="style" alt="img" />
                <div className="text">Caption Text</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">2 / 3</div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    style={{ width: "40em" }} id="style" alt="img" />
                <div className="text">Caption Two</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/290150650_395834612499552_150621027323456826_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=CyNX3ha-kncAX-fwHV7&_nc_ht=scontent-atl3-2.xx&oh=00_AfAOho8WGp5N9rX1y89MbC686X-oH-Ym_7HUEXRZHkC8pw&oe=63F44867"
                    style={{ width: "40em" }} id="style" alt="img" />
                <div className="text">Caption Three</div>
            </div>

        </div>
        <br></br>

        <div style={{ textAlign: "center" }} id="style">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    </>
}