import React from "react";
import "./Btn.css";
import "./BtnUnderline.css";

const BtnUnderline = (props)=>{
    return (
        <a class="btn__underline" href={props.URL}>{props.children}</a>
    )
}

export default BtnUnderline