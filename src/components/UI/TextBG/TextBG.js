import React from "react";
import "./TextBG.css";

const TextBG = (props) => {
    return (
        <div class="text_bg">
            <h1>{props.children}</h1>
        </div>
    )
}

export default TextBG;