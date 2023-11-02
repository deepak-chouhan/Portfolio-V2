import React from "react";
import "./SectionExperience.css"
import Company from "./Company";

const SectionExperience  = (props) => {
    return (
        <div className="experience">
            <h1 class="heading">02. Experience</h1>
            <div className="detail">
                {props.experiences.map(experience => <Company experience={experience}/>)}
            </div>
        </div>
    )
}

export default SectionExperience;