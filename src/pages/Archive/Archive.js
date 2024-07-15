import React from "react";
import ArchiveProject from "../../components/ProjectCards/ArchiveProject";
import Content from "../../components/UI/Content/Content";
import FloaterMain from "../../components/UI/Floaters/FloaterMain"
import GradientBlob from "../../components/UI/GradientBlob/GradientBlob";
import NavBar from "../../components/UI/NavBar/NavBar"

import "./Archive.css";

import data from "../../data/myData.json"
import Footer from "../../components/UI/Footer/Footer";

const Archive = (props) => {

    const projectHandler = (projects) => {
        projects = Object.entries(projects);
        return projects.map(project => project[1])
    }

    const projects = projectHandler(data.projects);
    console.log(projects)

    const archive= [];
    const projectLength = projects.length-1;

    for(let i=0; i<projectLength; i++){
        archive.push(<ArchiveProject srNo={i} projectData={projects[projectLength-i]}/>)
    }

    return (
        <div>
            <NavBar/>
            <FloaterMain dataFloater={data.hero}/>
            <GradientBlob/>
            <Content>
                <div className="Header">
                    <h1>Archive</h1>
                    <p>A big bucket of projects I've worked on</p>
                </div>

                <table className="VerticalContainer">
                    <tr>
                        <th>Sr</th>
                        <th>Title</th>
                        <th className="archive__tech">Tech</th>
                        <th>Links</th>
                    </tr>
                    {archive}
                </table>
            </Content>

            <Footer/>
        </div>
    )
}

export default Archive;