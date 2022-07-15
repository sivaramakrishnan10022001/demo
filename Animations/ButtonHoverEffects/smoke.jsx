import React from 'react';
import "./smoke.css";

export const Smoke = ({ className, name }) => {
    return (
        <div className={'smoke-wapper ' + className} >
            <button class="smoke-button">
                <div>
                    {
                        name.split("").map((n, ninx) => {
                            return (
                                <span style={{ "--d-smoke": `${0.05 * ninx}s`, "--nth": `${ninx + 1}` }} key={ninx}>{n}</span>
                            );
                        })
                    }
                </div>
            </button >
        </div >
    )
}
