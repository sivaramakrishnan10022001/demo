import React, { useState } from 'react';
import "./deletebutton.css";

export const DeleteButton = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='deletebutton-wapper'>
            <div className={`btn ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
                <span className='btn-icon'></span>
                <span className='text'>delete</span>
            </div>
        </div>
    )
}

