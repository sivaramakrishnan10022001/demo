import React, { useEffect } from 'react';
import "./scrollxaxis.css";

export const ScrollXaxis = ({ data }) => {

    useEffect(() => {
        const container = document.querySelector(".scrollxaxis-container");
        const cards = document.querySelector(".scrollxaxis-cards");
        /* keep track of user's mouse down and up */
        let isPressedDown = false;
        /* x horizontal space of cursor from inner container */
        let cursorXSpace;

        if (container) {
            container.addEventListener("mousedown", (e) => {
                isPressedDown = true;
                // console.log("offsetX", e.offsetX, ":", "offsetLeft", cards.offsetLeft, " e.offsetX - cards.offsetLeft", e.offsetX - cards.offsetLeft);

                cursorXSpace = e.offsetX - cards.offsetLeft;
                container.style.cursor = "grabbing";

                console.log(e.target)
            });

            container.addEventListener("mouseup", () => {
                container.style.cursor = "grab";
            });

            window.addEventListener("mouseup", () => {
                isPressedDown = false;
            });

            container.addEventListener("mousemove", (e) => {
                if (!isPressedDown) return;
                e.preventDefault();
                cards.style.left = `${e.offsetX - cursorXSpace}px`;
                boundCards(container, cards);
            });
        }
    }, [])

    const boundCards = (container, cards) => {
        const container_rect = container.getBoundingClientRect();
        const cards_rect = cards.getBoundingClientRect();
        if (parseInt(cards.style.left) > 0) {
            cards.style.left = 0;
        } else if (cards_rect.right < container_rect.right) {
            cards.style.left = `-${cards_rect.width - container_rect.width}px`;
        }
    }

    return (
        <div className="scrollxaxis-wapper" style={{ "--columns": `${data.length}` }}>
            <div className='scrollxaxis-container'>
                <div className="scrollxaxis-cards">
                    {
                        data.map((item, index) => {
                            return (
                                <div className="card" data-key={index} key={index}>
                                    <img src={item.img} alt="img" />
                                    <div className="card-content">
                                        <h2>{item.heading}</h2>
                                        <p>{item.description}</p>
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
