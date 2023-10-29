import React from "react";
import SectionAboutMe from "../../components/SectionAboutMe/SectionAboutMe";
import GradientBlob from "../../components/UI/GradientBlob/GradientBlob";
import FloaterMain from "../../components/UI/Floaters/FloaterMain";
import NavBar from "../../components/UI/NavBar/NavBar";
import Content from "../../components/UI/Content/Content";
import SectionHero from "../../components/SectionHero/SectionHero"
import SectionProject from "../../components/SectionProjects/SectionProjects";
import SectionContactMe from "../../components/SectionContactMe/SectionContactMe";
import Footer from "../../components/UI/Footer/Footer";


import data from "../../data/myData.json"
import versionFile from "../../../package.json"
const START_PROJECT = 0;
const TOTAL_PROJECTS = 3;

const Index = () => {

    const projectHandler = (projects) => {
        projects = Object.entries(projects);
        return projects.map(project => project[1])
    }

    const topProjects = projectHandler(data.projects).slice(START_PROJECT, TOTAL_PROJECTS)

    return (
        <div>
            <GradientBlob/>
            <FloaterMain dataFloater={data.hero} version={versionFile.version}/>
            <NavBar/>
            <SectionHero dataHero={data.hero}/>
            <Content>
                <SectionAboutMe aboutMe={data.aboutMe}/>
                <SectionProject topProjects={topProjects}/>
                <SectionContactMe contactData={data.contactMe}/>
            </Content>
            <Footer/>
        </div>
    )
}

export default Index;