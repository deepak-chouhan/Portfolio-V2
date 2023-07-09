import React, {useEffect} from "react";
import "./GradientBlob.css";

const GradientBlob = () => {

    let num1 = Math.floor(Math.random()*16777215).toString(16).padStart(6, 0);
    let num2 = Math.floor(Math.random()*16777215).toString(16).padStart(6, 0);
    let grad = `conic-gradient(from 265deg at 50% 50%, hsl(222deg 39% 94%) 45deg, #${num1} 226deg, #${num2} 323deg)`;
    let grad2 = `linear-gradient(45deg, #${num1}, #${num2})`;

    useEffect(() => {
        // Select the scrollbar thumb element
        const thumb = document.documentElement.style;
        // Change the color of the scrollbar thumb dynamically
        thumb.setProperty('--scrollbar-thumb-color', grad2);
    })

    return (
        <div id="gradient_blob" style={{backgroundImage:grad}}></div>   
    )
}

export default GradientBlob;