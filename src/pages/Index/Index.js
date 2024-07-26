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
import SectionExperience from "../../components/SectionExperience/SectionExperience";

const Index = () => {
    const topProjects = data.projects.filter((project) => project.topProject)
    return (
        <div>
            <GradientBlob/>
            <FloaterMain dataFloater={data.hero} version={versionFile.version}/>
            <NavBar/>
            <SectionHero dataHero={data.hero}/>
            <Content>
                <SectionAboutMe aboutMe={data.aboutMe}/>
                <SectionExperience experiences={data.experiences}></SectionExperience>
                <SectionProject topProjects={topProjects}/>
                <SectionContactMe contactData={data.contactMe}/>
            </Content>
            <Footer/>
        </div>
    )
}

export default Index;