import React from "react";
import "./Company.css"
import Skills from "../UI/Technologies/Skills";

const Company = (props) => {
    return (
        <div className="company">
            <a className="company__name" href={props.experience.company_link} target="opener">{props.experience.company}</a>
            <div className="company__experience">
                <div className="company__roles">
                    {props.experience.roles.map(role => 
                        <div className="company__role">
                            <div className="company__role__name">{role.name}</div>
                            <div className="company__role__duration">
                                <div className="company__role__duration__start">{role.from}</div>
                                <div className="company__role__duration__end"> — {role.to}</div>
                                {/* {role.from} — {role.to} */}
                            </div>
                        </div>
                    )}
                </div>
                <div className="company__summary">{props.experience.summary}</div>
                <Skills skills={props.experience.skills}></Skills>
            </div>
        </div>
    )
}

export default Company;