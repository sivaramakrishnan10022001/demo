import React, { useEffect } from 'react';
import "./swipperscroll.css";
// import Swiper from "./swiper/swiper-bundle.esm";
// import "./swiper/swiper-bundle.min.css"

export const Swipperscroll = ({ className }) => {

    useEffect(() => {
        // var swiper = new Swiper(".swipper-container", {
            // effect: "coverflow",
            // grabCursor: true,
            // cenderedSlides: true,
            // slidesPerView: 'auto',
            //     // shadow: true,
            //     coverflowEffect:{
            //         rotate:50,
            //         stretch:0,
            //         depth:100,
            //         modifier:1,
            //     },
            //     slideShadows: true,

            //     // shadowOffset: 20,
            //     // shadowScale: 0.94,
            // pagination: {
            //     el: ".swiper-pagination",
            // },
        // });
    }, [])

    return (
        <div className="swipper-section">
            <div className={`swipper-container ${className}`}>
                <div className="swipper-wapper">
                    <div className="swipper-slide"></div>
                </div>
            </div>
        </div>
    )
}

