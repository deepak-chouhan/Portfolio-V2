import React from "react";
import FloaterEmail from "./FloaterEmail"
import FloaterSocials from "./FloaterSocials"

const FloaterMain = (props) => {
    return (
        <div className="floaters">
            <FloaterEmail dataVersion={props.version}/>
            <FloaterSocials/>
        </div>
    )
}

export default FloaterMain