import React, { useEffect } from 'react';
import "./inputanimation.css";

export const InputAnimation = ({ className }) => {

    useEffect(() => {
        const labels = document.querySelectorAll('.form-control label');
        labels.forEach((label) => {
            label.innerHTML = label.innerText
                .split("")
                .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
                .join("");
        });
    }, [])

    return (
        <div className={`inputanimation-wapper ${className}`}>
            <div className="inputanimation-container">
                {/* <h1>sign in</h1> */}
                <h1></h1>

                <form className='form'>
                    <div className="form-control">
                        <input type="text" required />
                        <label htmlFor="">Your email</label>
                    </div>
                    <div className="form-control">
                        <input type="password" required />
                        <label htmlFor="">Your password</label>
                    </div>
                    <div className="submit-btn">submit</div>
                    <p className='text'>
                        don't have an account? <a href="#">create account</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

