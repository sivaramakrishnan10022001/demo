
import React, { useState, useEffect, useRef } from 'react';
import "./micro.css";

export default function Micro() {

    const [values, setValues] = useState(0);
    const [start, setStart] = useState(false);

    const ref = useRef(null);

    // style="transition-duration: 0ms; transform: translate3d(334.333px, 0px, 0px);"
    
    useEffect(() => {
        const element = ref.current;
        if (element) {

            var starting = false

            element.addEventListener('mousedown', (e) => {
                starting = true
            });

            element.addEventListener('mousemove', (e) => {
                e.preventDefault();
                if (starting) {
                    setValues(values + 1)
                }
            });

            element.addEventListener('mouseup', (e) => {
                starting = false
            });
            element.addEventListener('mouseleave', (e) => {
                starting = false
            });

            window.addEventListener('mouseup', () => {
                starting = false
            })

        }
    
    }, [])

    const mouseDown = () => {

    }



    const data = [
        {
            title: "content1"
        },
        {
            title: "content2"
        },
        {
            title: "content3"
        },
        {
            title: "content4"
        },
        {
            title: "content5"
        },
        {
            title: "content6"
        },
        {
            title: "content7"
        },
        {
            title: "content8"
        },
        {
            title: "content9"
        },
        {
            title: "content10"
        },
    ]

    // const touchstart = (e) => {
    //     console.log("drstart")
    // }
    // const touchmove = (e) => {
    //     console.log("drmove")
    // }
    // const touchend = (e) => {
    //     console.log("drend")
    // }

    // const mousedown = (e) => {
    //     console.log("mousedown")
    //     setStart(true)
    // }
    // const mousemove = (e) => {
    //     if (start === true) {
    //         console.log("mousemove")
    //     }
    // }
    // const mouseup = (e) => {
    //     console.log("mouseup")
    //     setStart(false)
    // }
    // const mouseupcapture = (e) => {
    //     console.log("mouseupcapture")
    //     setStart(false)
    // }
    // const mouseleave = (e) => {
    //     console.log("mouseleave")
    //     setStart(false)
    // }



    return (
        <div className='micro-wapper' style={{ "--dvalue": `translate3d(-${values}px,0px,0px)` }}>
            <div
                className="micro-containers"
                // onMouseDown={(e) => mousedown(e)}
                // onMouseMove={(e) => mousemove(e)}
                // onMouseUp={(e) => mouseup(e)}
                // onMouseUpCapture={(e) => mouseupcapture(e)}
                // onMouseLeave={(e) => mouseleave(e)}
                ref={ref}
                style={{ "--": `translate3d(-${values}px, 0px, 0px)` }}
            // onTouchStart={(e) => touchstart(e)}
            // onTouchMove={(e) => touchmove(e)}
            // onTouchEnd={(e) => touchend(e)}
            >
                {
                    data.map((value, index) => {
                        return (
                            <div className="micro-content" key={index}>{value.title}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
