import React from "react";
import IconGithub from "../../components/UI/Icons/IconGithub"
import IconWebsite from "../../components/UI/Icons/IconWebsite"
import "./ArchiveProject.css";

const ArchiveProject = (props)=>{

    return (
        <tr className="ArchiveProject">
            <td>{props.projectData.id}</td>
            <td className="project_title">{props.projectData.name}</td>
            <td className="archive__tech">
                <ul style={{color: props.projectData.accentColor}} class="project__tech">{props.projectData.techStack.map(skill => <li>{skill}</li>)}</ul>
            </td>
            <td class="Links">
                {props.projectData.githubLink==="null"?"":<IconGithub URL={props.projectData.githubLink}/>}
                {props.projectData.websiteLink==="null"?"":<IconWebsite URL={props.projectData.websiteLink}/>}
            </td>
        </tr>
    )
}

export default ArchiveProject;