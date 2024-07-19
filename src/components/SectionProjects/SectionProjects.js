import React from "react";
import TopProjectCard from "../ProjectCards/TopProjectCard";
import "./SectionProject.css";
import { Link } from "react-router-dom";


const SectionProject = (props) => {

    const TOTAL_PROJECTS = props.topProjects.length;
    const projectCard = [];

    for(let i=props.topProjects.length - 1; i>=0; i--){
        projectCard.push(<TopProjectCard key={i} projectData={props.topProjects[i]} srNO={i} totalProjects={TOTAL_PROJECTS}/>)
    }

    return (
        <div className="top_projects">
            <h1 className="heading">03. Projects I've Built</h1>
            <div className="projects">
                {projectCard}
            </div>
            <div className="archive">
                <Link to="/archive">view archive</Link>
            </div>
        </div>
    )
}

export default SectionProject;