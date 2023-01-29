import React from "react";
import "./GradientBlob.css";

const GradientBlob = () => {

    let num1 = Math.floor(Math.random()*16777215).toString(16);
    let num2 = Math.floor(Math.random()*16777215).toString(16);
    let grad = `conic-gradient(from 265deg at 50% 50%, hsl(222deg 39% 94%) 45deg, #${num1} 226deg, #${num2} 323deg)`;

    return (
        <div id="gradient_blob" style={{backgroundImage:grad}}></div>   
    )
}

export default GradientBlob;