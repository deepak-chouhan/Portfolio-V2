import React from "react";
import TopProjectCard from "../ProjectCards/TopProjectCard";
import "./SectionProject.css";


const SectionProject = (props) => {

    const TOTAL_PROJECTS = props.topProjects.length;
    const projectCard = [];

    for(let i=0; i<props.topProjects.length; i++){
        projectCard.push(<TopProjectCard key={i} projectData={props.topProjects[i]} srNO={i} totalProjects={TOTAL_PROJECTS}/>)
    }

    return (
        <div class="top_projects">
            <h1 class="heading">03. Projects I've Built</h1>
            <div class="projects">
                {projectCard}
            </div>
            <div class="archive">
                <a href="/archive">view archive</a>
            </div>
        </div>
    )
}

export default SectionProject;