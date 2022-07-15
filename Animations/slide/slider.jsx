import React, { useState, useEffect } from 'react';
import "./slider.css";

export const Slider = ({ className }) => {

    useEffect(() => {
        var slider = document.getElementById('slider-container'),
            sliderItems = document.getElementById('slider-items'),
            prev = document.getElementById('prev'),
            next = document.getElementById('next');
        slide(slider, sliderItems, prev, next);
    }, [])

    const slide = (wrapper, items, prev, next) => {
        var posX1 = 0,
            posX2 = 0,
            posInitial,
            posFinal,
            threshold = 100,
            slides = items.getElementsByClassName('slide'),
            slidesLength = slides.length,
            slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
            firstSlide = slides[0],
            lastSlide = slides[slidesLength - 1],
            cloneFirst = firstSlide.cloneNode(true),
            cloneLast = lastSlide.cloneNode(true),
            index = 0,
            allowShift = true;
        // Clone first and last slide
        items.appendChild(cloneFirst);
        items.insertBefore(cloneLast, firstSlide);
        wrapper.classList.add('loaded');

        // Mouse and Touch events
        items.onmousedown = dragStart;

        // Touch events
        items.addEventListener('touchstart', dragStart);
        items.addEventListener('touchend', dragEnd);
        items.addEventListener('touchmove', dragAction);

        // Click events
        prev.addEventListener('click', function () { shiftSlide(-1) });
        next.addEventListener('click', function () { shiftSlide(1) });

        // Transition events
        items.addEventListener('transitionend', checkIndex);

        function dragStart(e) {
            e = e || window.event;
            e.preventDefault();
            posInitial = items.offsetLeft;
            if (e.type == 'touchstart') {
                posX1 = e.touches[0].clientX;
            } else {
                posX1 = e.clientX;
                document.onmouseup = dragEnd;
                document.onmousemove = dragAction;
            }
            console.log(e.target.getAttribute('data-key'))

            console.log("dragStart")
        }

        function dragAction(e) {
            e = e || window.event;
            if (e.type == 'touchmove') {
                posX2 = posX1 - e.touches[0].clientX;
                posX1 = e.touches[0].clientX;
            } else {
                posX2 = posX1 - e.clientX;
                posX1 = e.clientX;
            }
            items.style.left = (items.offsetLeft - posX2) + "px";
            console.log("items.style.left", items.style.left)
        }

        function dragEnd(e) {
            posFinal = items.offsetLeft;
            if (posFinal - posInitial < -threshold) {
                shiftSlide(1, 'drag');
            } else if (posFinal - posInitial > threshold) {
                shiftSlide(-1, 'drag');
            } else {
                items.style.left = (posInitial) + "px";
            }
            document.onmouseup = null;
            document.onmousemove = null;
            console.log("dragEnd")
        }

        function shiftSlide(dir, action) {
            items.classList.add('shifting');
            if (allowShift) {
                if (!action) { posInitial = items.offsetLeft; }
                if (dir == 1) {
                    items.style.left = (posInitial - slideSize) + "px";
                    index++;
                } else if (dir == -1) {
                    items.style.left = (posInitial + slideSize) + "px";
                    index--;
                }
            };
            allowShift = false;
            console.log("shiftSlide")
        }

        function checkIndex() {

            items.classList.remove('shifting');
            if (index == -1) {
                items.style.left = -(slidesLength * slideSize) + "px";
                index = slidesLength - 1;
            }
            if (index == slidesLength) {
                items.style.left = -(1 * slideSize) + "px";
                index = 0;
            }
            allowShift = true;

            console.log("checkIndex")
        }
    }

    const data = [
        { title: "slide 1", color: "ffcf47" },
        { title: "slide 2", color: "7adcef" },
        { title: "slide 3", color: "f97c68" },
        { title: "slide 4", color: "a78df5" },
        { title: "slide 5", color: "ff8686" },
    ]
    return (
        <div className={'slider-wapper ' + className} >
            <div id="slider-container" className="slider-container">
                <div className="slider-content">
                    <div id="slider-items" className="slider-items">
                        {
                            data.map((item, index) => {
                                return (
                                    <span
                                        className="slide"
                                        style={{ "background": `#${item.color}` }}
                                        data-key={index}
                                        key={index}>
                                        {item.title}
                                    </span>
                                );
                            })
                        }
                    </div>
                </div>
                <a id="prev" className="control prev"></a>
                <a id="next" className="control next"></a>
            </div>
        </div>
    )
}

