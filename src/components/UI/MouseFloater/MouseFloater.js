import React from "react";
import "./MouseFloater.css";

const MouseFloater = () => {
    return (
        <div className="mouseIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path className="mouseWheel" d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z"></path>
                <path className="mouseWheel" d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z"></path>
            </svg>
        </div>
    );
};

export default MouseFloater;
