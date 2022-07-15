import React, { useState, useEffect, useRef } from 'react';
import "./slideranimationcopy.css";

export const SliderAnimationCopy = ({ className }) => {
    const [slideIndex, setslideIndex] = useState(1);

   
    // let slideIndex = 1;

    useEffect(() => {
        const containerDots = document.querySelector(".container-dots");
        const dots = containerDots.querySelectorAll("*").forEach((dot, index) => {
            dot.addEventListener("click", () => {
                moveDot(index + 1);
            });
        });
       
    })

    useEffect(()=>{
       updateImageAndDot();
    },[])

    const images = [
        { src: "https://rb.gy/ohx0bd" },
        { src: "https://rb.gy/gggxy8" },
        { src: "https://rb.gy/z2a0fy" },
        { src: "https://rb.gy/nsefjh" },
        { src: "https://rb.gy/dssu2a" }
    ];

    const moveDot = (index) => {
        // slideIndex = index;
        setslideIndex(() => index)
        updateImageAndDot();
    }

    const updateImageAndDot = () => {
        const slidescontent = document.querySelector(".slidescontent");
        const containerDots = document.querySelector(".container-dots");

        const activeSlide = slidescontent.querySelector(['data-active']);
        slidescontent.children[slideIndex - 1].dataset.active = true;
        activeSlide && delete activeSlide.dataset.active;

        const activeDot = containerDots.querySelector('[data-active]');
        containerDots.children[slideIndex - 1].dataset.active = true;
        activeDot && delete activeDot.dataset.active;
    }

    const nextSlide = () => {
        if (slideIndex !== images.length) {
            // ++slideIndex;
            setslideIndex(() => slideIndex + 1)
        } else if (slideIndex === images.length) {
            // slideIndex = 1;
            setslideIndex(() => 1)
        }
        updateImageAndDot();
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            // --slideIndex;
            setslideIndex(() => slideIndex - 1)
        } else if (slideIndex === 1) {
            // slideIndex = images.length;
            setslideIndex(() => images.length)
        }
        updateImageAndDot();
    };

    // updateImageAndDot();

    return (
        <div className="slider-animation-copy-wapper"  >
            {/* onLoad={() => updateImageAndDot()} */}
            <div className="container-slider-animation">
                <div className="slidescontent" >
                    {
                        images.map((img, imgInx) => {
                            return (
                                <img src={img.src} alt="img" key={imgInx} />
                                // data-active={`${slideIndex -1 === imgInx ? "true" : "false"}`}
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
                                <div className='dot' key={dotInx}  ></div>
                                // data-active={`${slideIndex -1 === dotInx ? "true" : "false"}`}
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

