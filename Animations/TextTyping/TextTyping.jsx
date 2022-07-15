import React from 'react';
import "./TextTyping.css";

const TextTyping = ({className}) => {
    return (
        <div className={`TextTyping-wapper ${className}`}>
            <div className="TextTyping">
                <h2>loading...</h2>
            </div>
        </div>
    )
}

export default TextTyping;
