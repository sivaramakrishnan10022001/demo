import React from 'react';
import "./RadioButton.css";

export const RadioButton = ({ className }) => {
    return (
        <div className={`radiobutton-container ${className}`}>
            <label htmlFor=""><input type="radio" name='btn' /></label>
            <label htmlFor=""><input type="radio" name='btn' /></label>
        </div>
    )
}
