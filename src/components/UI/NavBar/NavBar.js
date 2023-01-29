import React from "react";
import BtnUnderline from "../Buttons/BtnUnderline";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="desk_nav">
            <nav>
                <ul>
                    <li><BtnUnderline URL="/">Home</BtnUnderline></li>
                    <li><BtnUnderline URL="/#aboutme" target="opener">About Me</BtnUnderline></li>
                    <li><a class="btn__underline" href="https://drive.google.com/file/d/1Dew7d7_a3HjRIp1I-WTRpPqhyuNfBzPK/view?usp=sharing"
                        target="opener">Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;