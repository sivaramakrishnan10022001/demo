import React from 'react';
import "./jumping.css";

export const Jumping = ({ className, name }) => {
    return (
        <div className={'jumping-wapper ' + className} >
            <button class="jumping-button">
                <div>
                    {
                        name.split("").map((n, ninx) => {
                            return (
                                <span style={{ "--d": `${0.05 * ninx}s`, "--nth": `${ninx + 1}` }} key={ninx}>{n}</span>
                            );
                        })
                    }
                </div>
            </button >
        </div >
    )
}

