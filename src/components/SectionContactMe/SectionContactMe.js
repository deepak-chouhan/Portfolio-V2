import React from "react";
import BtnGradientBorder from "../UI/Buttons/BtnGradientBorder";
import "./SectionContactMe.css";

const SectionContactMe = (props) => {

    const email = "mailto:thisisdeepakchouhan@gmail.com";

    return (
        <div class="contact">
            <h1>{props.contactData.title}</h1>
            <p>{props.contactData.mssg}</p>
            <BtnGradientBorder URL={email} text="Say Hello" />
        </div>
    )
}

export default SectionContactMe;