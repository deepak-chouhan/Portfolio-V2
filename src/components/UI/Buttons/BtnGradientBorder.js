import React from "react";
import "./Btn.css";
import "./BtnGradientBorder.css";

const BtnGradientBorder = (props)=>{
    return (
        <a class="btn btn__border__gradient" href={props.URL}>{props.text}</a>
    )
}

export default BtnGradientBorder