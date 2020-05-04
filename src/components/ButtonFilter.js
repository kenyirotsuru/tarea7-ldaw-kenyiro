import React from "react";
import ButtonImg from "./ButtonImg";

const ButtonFilter = ({title, buttons, tooltip, state, setState}) => {
    return(
        <div className={"container text-left mb-3"}>
            <div className={"row"}>
                <div className={"col"}>
                    <b data-toggle="tooltip" title={tooltip}>{title}</b>
                    <label 
                        className={"btn px-0 py-0"} 
                        style={{backgroundColor : "blue", color : "#FFF", borderRadius : 0}} 
                        title={tooltip}> 
                    ?
                     </label>
                </div>
            </div>
            <div className={"row"}>
                {buttons.map((btn, i) =>
                    <ButtonImg src={btn.src} label={btn.label} size={3} state={state} setState={setState} key={i}/>
                )}
            </div>
        </div>
    ) 
}

export default ButtonFilter;