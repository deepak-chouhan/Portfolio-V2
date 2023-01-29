import React from "react";
import IconGithub from "../UI/Icons/IconGithub";
import IconWebsite from "../UI/Icons/IconWebsite";

import "./TopProjectCard.css";

const TopProjectCard = (props) => {

    const srNO = props.srNO + 1;

    return (
        <div class="project">
            <div className="cover">
                <img src={props.projectData.cover} alt="Project Cover"/>
            </div>
            <div class="project__details">
                <p class="project__overline">0{srNO} / 0{props.totalProjects}</p>
                <h1 class="project__title">{props.projectData.name}</h1>
                <div class="project__desc">
                    <p class="desc">{props.projectData.summary}</p>
                    <ul style={{color: props.projectData.accentColor}} class="project__tech">{props.projectData.techStack.map(skill => <li>{skill}</li>)}</ul>
                </div>
                <div class="project__link">
                    {props.projectData.githubLink==="null"?"":<IconGithub URL={props.projectData.githubLink} accentcolor={props.projectData.accentColor}/>}
                    {props.projectData.websiteLink==="null"?"":<IconWebsite URL={props.projectData.websiteLink} accentcolor={props.projectData.accentColor}/>}
                </div>
            </div>
        </div>
    )
}

export default TopProjectCard;