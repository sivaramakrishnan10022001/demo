import React, { useEffect } from 'react';
import "./ButtonHoverEffects2.css";

export const ButtonHoverEffects2 = ({ className }) => {
    useEffect(() => {
        document.querySelectorAll('.ButtonHoverEffects2').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
    })
    return (
        <div className={'buttonhover-effects2-wapper ' + className}>
            <button class="ButtonHoverEffects2">Jumping</button>
            <button class="ButtonHoverEffects2 smoke dark">Smoke</button>
            <button class="ButtonHoverEffects2 drive white">Drive</button>
        </div>
    )
}

