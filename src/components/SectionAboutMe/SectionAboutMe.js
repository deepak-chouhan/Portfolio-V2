import React from "react";
import "./SectionAboutMe.css"
import profile from "./profile.png"

const SectionAboutMe = (props) => {
    return (
        <div class="about_me" id="aboutme">
            <h1 class="heading">01. About Me</h1>
            <div class="details">
                <div class="summary">
                    <div class="about">{props.aboutMe.summary}</div>
                    <div class="skills">
                        <p>Technologies I've worked With :-</p>
                        <ul>{props.aboutMe.skills.map(skill => <li>{skill}</li>)}</ul>
                    </div>
                </div>
                <div>
                    <img src={profile} alt="profile"/>
                </div>
            </div>
        </div>
    )
}

export default SectionAboutMe;