import React from "react";
import "./Content.css";

const Content = (props) => {
    const classes = "content " + props.className || " ";
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Content;