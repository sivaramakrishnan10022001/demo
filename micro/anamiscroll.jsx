import React, { useState, useEffect } from 'react';
import "./anamiscroll.css"

export const Anamiscroll = () => {
    // const [pressed, setPressed] = useState(false);
    // const [startX, setStartX] = useState(null);
    // const [x, setX] = useState(null);
    // const [count, setCount] = useState(0);
    // const [value, setValue] = useState(0);
    // const [inx, setInx] = useState(null);

    useEffect(() => {
        draggableSlider();
    }, [])

    const data = [
        { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
        { img: "https://swiperjs.com/demos/images/nature-2.jpg" },
        { img: "https://swiperjs.com/demos/images/nature-3.jpg" },
        { img: "https://swiperjs.com/demos/images/nature-4.jpg" },
        { img: "https://swiperjs.com/demos/images/nature-5.jpg" },
        { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
        { img: "https://swiperjs.com/demos/images/nature-2.jpg" },
        { img: "https://swiperjs.com/demos/images/nature-3.jpg" },
        { img: "https://swiperjs.com/demos/images/nature-4.jpg" },
        { img: "https://swiperjs.com/demos/images/nature-5.jpg" },
    ]

    let draggableSlider = function () {
        // DOM element(s)
        let slider = document.querySelector(".slider"),
            innerSlider = document.querySelector(".slider-inner");

        // Slider variables
        let pressed = false,
            startX,
            x;

        // Mousedown eventlistener
        let count = 0;
        let value = [];

        let allslider = document.querySelectorAll('.slider-inner .slide');



        // console.log("allslider", allslider)

        slider.addEventListener("mousedown", (e) => {
            pressed = true;
            startX = e.offsetX - innerSlider.offsetLeft;
            slider.style.cursor = "grabbing";
        });

        // mouseneter
        slider.addEventListener("mouseenter", () => {
            slider.style.cursor = "grab";
        });

        // mouseup
        slider.addEventListener("mouseup", () => {
            slider.style.cursor = "grab";
        });

        // window
        window.addEventListener("mouseup", () => {
            pressed = false;
        });

        // Slider mousemove event listener
        slider.addEventListener("mousemove", (e) => {
            if (!pressed) return;
            e.preventDefault();
            x = e.offsetX;
            innerSlider.style.left = `${x - startX}px`;

            count++;

            console.log("innerSlider", innerSlider.offsetWidth, "innerSlider left  ", innerSlider.offsetLeft );
            console.log("slide" , document.querySelector('.slide').offsetWidth)

            checkBoundry();


        });

        // Check boundry of outer and inner sliders
        function checkBoundry() {
            let outer = slider.getBoundingClientRect(),
                inner = innerSlider.getBoundingClientRect();
            if (parseInt(innerSlider.style.left) > 0) {
                innerSlider.style.left = "0px";
            } else if (inner.right < outer.right) {
                innerSlider.style.left = `-${inner.width - outer.width}px`;
            }
            value = count;

        }
    };

    const mousedown = (e) => {

    }


    // const mousemove = (e) => {
    // }
    // const mouseenter = (e) => {
    // }
    // const mouseup = (e) => {
    // }
    // const mouseleave = (e) => {
    // }

    return (
        <div className="wapper">
            <div className="slider"
            // onMouseDown={(e) => mousedown(e)}
            // onMouseMove={(e) => mousemove(e)}
            // onMouseEnter={(e) => mouseenter(e)}
            // onMouseUp={(e) => mouseup(e)}
            // onMouseLeave={(e) => mouseleave(e)}
            >
                <div className="slider-inner"
                >
                    {/* style="width: 240px; z-index: 5; transform: translate3d(-480px, 0px, 0px) rotateZ(0deg) scale(1); transition-duration: 0ms;" */}
                    {
                        data.map((img, index) => {
                            return (
                                <div
                                    className="slide"
                                    data-key={index}
                                    key={index} >
                                    <div className={"slide__img "}>
                                        <img src={img.img} alt="img" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

