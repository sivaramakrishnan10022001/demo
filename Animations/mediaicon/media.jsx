import React from 'react';
import "./media.css";

const MediaIcon = ({ className, data }) => {
    return (
        <div className={`media-wapper ${className}`}>
            <div className="section">
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
            </div>
            <div className="media-icons">
                {
                    data.map((svg, svgInx) => {
                        return (
                            <div className="icon" key={svgInx}>
                                <a className='icon-a' href="#">
                                    <svg className='icon-svg' xmlns="http://www.w3.org/2000/svg" viewBox={svg.viewBox}>
                                        <path d={svg.svgpath} />
                                    </svg>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MediaIcon;