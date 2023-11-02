import React from "react";
import "./Skills.css";

const Skills = (props) => {
    return (
        <div class="skills">
            <ul>{props.skills.map(skill => <li>{skill}</li>)}</ul>
        </div>
    )
};

export default Skills;