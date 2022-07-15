import React from 'react';
import "./GlassmorphismEffect.css"

export default function GlassmorphismEffect({ className, img }) {
    return (
        <div className={`glassmorphism-effect-section ${className}`}>
            <div className="glassmorphism-effect-container">
                <div className="glassmorphism-effect-card">
                    <div className="glassmorphism-effect-img-box">
                        <img className='img' src={img} alt="img" />
                        <h2>Nike Shoes</h2>
                    </div>
                    <div className="glassmorphism-effect-content">
                        <div className="size">
                            <h3>size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div className="color">
                            <h3>color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="#">Buy Now</a>
                    </div>
                </div>
                {/* ====================== */}
                <div className="glassmorphism-effect-card">
                    <div className="glassmorphism-effect-img-box">
                        <img className='img' src={img} alt="img" />
                        <h2>Nike Shoes</h2>
                    </div>
                    <div className="glassmorphism-effect-content">
                        <div className="size">
                            <h3>size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div className="color">
                            <h3>color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="#">Buy Now</a>
                    </div>
                </div>
                {/* =========================== */}
                <div className="glassmorphism-effect-card">
                    <div className="glassmorphism-effect-img-box">
                        <img className='img' src={img} alt="img" />
                        <h2>Nike Shoes</h2>
                    </div>
                    <div className="glassmorphism-effect-content">
                        <div className="size">
                            <h3>size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div className="color">
                            <h3>color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
