import React from 'react';
import "./SubmitButton.css";

export const SubmitButton = ({ className, png }) => {
    return (
        <div className='submitbutton-wapper'>
            <div className="cont">
                <button className="btn">
                    <span>Submit</span>
                    <img src={png} height="62" width="62" />
                </button>
            </div>
        </div>
    )
}

