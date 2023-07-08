import React from "react";
import "./FloaterEmail.css";
import FloaterVersion from "./FloaterVersion";

const FloaterEmail = () => {
    const email = "mailto:thisisdeepakchouhan@gmail.com";
    return (
        <div className="FloaterEmail">
            <div className="email__mob">
                <a href="mailto:deepak16chouhan@gmail.com">deepak16chouhan@gmail.com</a>
            </div>
            <div className="email__desk">
                <a href={email} class="icon__email">
                    <svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.02594H36.4286V29.6678H1V1.02594Z" stroke="white" stroke-width="1.5" />
                        <path
                            d="M1 2L16.9565 15.478C17.4482 15.8934 18.0709 16.1213 18.7143 16.1213C19.3577 16.1213 19.9804 15.8934 20.4721 15.478L36.4286 2"
                            stroke="white" stroke-width="1.5" />
                    </svg>
                </a>
                <FloaterVersion/>
            </div>
        </div>
    )
}

export default FloaterEmail;