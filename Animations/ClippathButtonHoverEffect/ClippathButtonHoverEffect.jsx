import React from 'react';
import "./ClippathButtonHoverEffect.css"

export const ClippathButtonHoverEffect = ({ className }) => {
    return (
        <div className={`clip-pathbutton-wapper ${className}`} id="clip-pathbutton-wapper">
            <a href="#clip-pathbutton-wapper">
                <span>button</span>
                <span>button</span>
            </a>
        </div>
    )
}
