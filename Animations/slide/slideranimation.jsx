import React, { useState, useEffect, useRef } from 'react';
import "./slideranimation.css";

export const SliderAnimation = ({ className }) => {
    const [slideIndex, setslideIndex] = useState(1);

    // const slidescontent = document.querySelector(".slidescontent");
    // const containerDots = document.querySelector(".container-dots");

    useEffect(() => {
        // var slideIndex = 1;
        // const slidescontent = document.querySelector(".slidescontent");
        const containerDots = document.querySelector(".container-dots");
        // console.log("slidescontentss", slidescontentss)
        // console.log("containerDotss", containerDotss)
        // const slidescontent = document.querySelector(".slidescontent");
        // const containerDots = document.querySelector(".container-dots");

        const dots = containerDots.querySelectorAll("*").forEach((dot, index) => {
            dot.addEventListener("click", () => {
                moveDot(index + 1);
            });
        });
        // console.log("slidescontentss.current", slidescontentss.current)
        // console.log("containerDotss.current", containerDotss.current)
        // if (slidescontentss.current !== null) {
        //     slidescontentss.current.querySelectorAll('*').forEach((item) => {
        //         console.log("item", item)
        //     })
        // }
    }, [])

    // useEffect(() => {
    //     updateImageAndDot();
    // }, [])

    const images = [
        { src: "https://rb.gy/ohx0bd" },
        { src: "https://rb.gy/gggxy8" },
        { src: "https://rb.gy/z2a0fy" },
        { src: "https://rb.gy/nsefjh" },
        { src: "https://rb.gy/dssu2a" }
    ];

    const moveDot = (index) => {
        setslideIndex(() => index)
        updateImageAndDot();
    }


    const updateImageAndDot = () => {

        // const activeSlide = slidescontent.querySelector(['data-active']);
        // const activeSlide = document.querySelector(".slidescontent").querySelector(['data-active']);
        // slidescontent.children[slideIndex - 1].dataset.active = true;
        // document.querySelector(".slidescontent").children[slideIndex - 1].dataset.active = true;
        // activeSlide && delete activeSlide.dataset.active;

        // const activeDot = containerDots.querySelector('[data-active]');
        // const activeDot = document.querySelector(".container-dots").querySelector('[data-active]');
        // containerDots.children[slideIndex - 1].dataset.active = true;
        // document.querySelector(".container-dots").children[slideIndex - 1].dataset.active = true;
        // activeDot && delete activeDot.dataset.active;
    }

    const nextSlide = () => {
        if (slideIndex !== images.length) {
            setslideIndex(() => slideIndex + 1)
        } else if (slideIndex === images.length) {
            setslideIndex(() => 1)
        }
        updateImageAndDot();
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setslideIndex(() => slideIndex - 1)
        } else if (slideIndex === 1) {
            setslideIndex(() => images.length)
        }
        updateImageAndDot();
    };

    // updateImageAndDot();

    return (
        <div className="slider-animation-wapper"  >
            {/* onLoad={() => updateImageAndDot()} */}
            <div className="container-slider-animation">
                <div className="slidescontent" >

                    {
                        images.map((img, imgInx) => {
                            return (
                                <img src={img.src} alt="img" key={imgInx} data-active={`${slideIndex -1 === imgInx ? "true" : "false"}`} />
                            );
                        })
                    }
                </div>
                <button className="btn-slide prev" onClick={() => prevSlide()}>
                    <img src="https://imgur.com/SUyRJqI.png" alt="prevBtn" />
                </button>
                <button className="btn-slide next" onClick={() => nextSlide()}>
                    <img src=" https://imgur.com/M6rDsRR.png" alt="nextBtn" />
                </button>
                <div className="container-dots" >
                    {
                        images.map((img, dotInx) => {
                            return (
                                <div className='dot' key={dotInx} data-active={`${slideIndex -1 === dotInx ? "true" : "false"}`} ></div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

