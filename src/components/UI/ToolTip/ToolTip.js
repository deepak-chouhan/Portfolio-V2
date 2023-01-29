import React from "react";
import "./ToolTip.css";

const ToolTip = (props) => {
    return (
        <p class="tooltip">
            {props.toolTip}
            <span className="tooltip__text">{props.toopTipText}</span>
        </p>
    )
}

export default ToolTip;