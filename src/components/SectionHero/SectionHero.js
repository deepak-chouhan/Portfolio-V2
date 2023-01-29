import React from "react";
import TextBG from "../UI/TextBG/TextBG";
import ToolTip from "../UI/ToolTip/ToolTip";
import "./SectionHero.css";

const SectionHero = (props) => {
    return (
        <div class="hero">
            <div class="intro">
                <ToolTip toolTip={props.dataHero.helloBinary} toopTipText="Hello"/>
                <h1 class="intro__name">{props.dataHero.mainText}</h1>
                <p class="intro__summary">{props.dataHero.shortSummary}</p>
            </div>
            <TextBG>{props.dataHero.textBg}</TextBG>
        </div>
    )
}

export default SectionHero;