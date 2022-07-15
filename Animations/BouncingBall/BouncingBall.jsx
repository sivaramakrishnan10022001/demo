import React from 'react';
import "./BouncingBall.css";

export const BouncingBall = ({ className }) => {
    return (
        <div className={`bouncingball-wapper ${className}`}>
            <div className="bouncingball-loader">
                <div className="semi-circle"></div>
                <div className="ball"></div>
                <div className="ball ball2"></div>
            </div>
        </div>
    )
}


