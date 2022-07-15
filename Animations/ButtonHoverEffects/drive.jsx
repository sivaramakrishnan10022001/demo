import React from 'react';
import "./drive.css";

export const Drive = ({ className, name }) => {
    return (
        <div className={'drive-wapper ' + className} >
            <button class="drive-button drive">
                <div>
                    {
                        name.split("").map((n, ninx) => {
                            return (
                                <span style={{ "--d-drive": `${0.05 * ninx}s`, "--nth": `${ninx + 1}` }} key={ninx}>{n}</span>
                            );
                        })
                    }
                </div>
            </button >
        </div >
    )
}

