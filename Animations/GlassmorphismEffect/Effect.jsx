import React, { useState, useEffect } from 'react';
import "./Effect.css";
import img1 from "../../../shoes.png";
import img2 from "../../../shoe.png";
import img3 from "../../../shoee.png";


export const Effect = ({ className, color, size, BuyNow }) => {

    const [hover, setHover] = useState(false);
    const [Index, setIndex] = useState('');

    useEffect(() => {
        newfunc()
    })

    const data = [
        {
            name: "nike shoes",
            img: img1,
            size: [7, 8, 9, 10],
            color: ["9bdc28", "03a9f4", "e91e63"]
        },
        {
            name: "nike shoes",
            img: img2,
            size: [7, 8, 9, 10],
            color: ["9bdc28", "03a9f4", "e91e63"]
        },
        {
            name: "nike shoes",
            img: img3,
            size: [7, 8, 9, 10],
            color: ["9bdc28", "03a9f4", "e91e63"]
        },
        {
            name: "nike shoes",
            img: img1,
            size: [7, 8, 9, 10],
            color: ["9bdc28", "03a9f4", "e91e63"]
        }
    ]




    const startCount = (el) => {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
            }
        }, 2000 / goal);
    }



    const mhover = (index) => {
        setHover(true);
        setIndex(index)
        
    }

    const newfunc = () => {
        let start = false;
        if (hover === true) {
            if (!start) {
                let nums = document.querySelectorAll(`.nums${Index} .num`);
                nums.forEach((num) => {
                    startCount(num)
                });
            }
            start = true
        }
    }



    const mleave = (index, product) => {

        // product.size.map(() => {

        // })

        let nums = document.querySelectorAll(`.nums${Index} .num`);
        nums.forEach((num) => {
            return num.innerHTML = 0
        });

        setHover(false);
        setIndex('');
    }



    return (
        <div className={`card-section ${className}`}>
            <div className="card-container">
                {
                    data.map((product, index) => {
                        return (
                            <div className="card" onMouseOver={() => mhover(index)} onMouseLeave={() => mleave(index, product)} key={index}>
                                <div className="img-box">
                                    <img className='img' src={product.img} alt="img" />
                                    <h2>{product.name}</h2>
                                </div>
                                <div className="content" onMouseLeave={() => mleave()}>
                                    {
                                        size ?
                                            <div className={`size nums${index}`}>
                                                <h3>size :</h3>
                                                {
                                                    product.size.map((size, sinx) => {
                                                        return (
                                                            // {size}
                                                            <span className='num' data-goal={size} key={sinx}>0</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            : ""
                                    }

                                    {
                                        color ?
                                            <div className="color">
                                                <h3>color :</h3>
                                                {
                                                    product.color.map((color, cinx) => {
                                                        return (
                                                            <span style={{ "--color": `#${color}` }} key={cinx}></span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            : ""
                                    }

                                    {
                                        BuyNow ?
                                            <div className='buynow'>
                                                <a href="#"><span>Buy Now</span></a>
                                            </div>
                                            : ""
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
