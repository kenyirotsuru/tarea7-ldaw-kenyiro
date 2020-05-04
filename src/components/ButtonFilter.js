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
                        style={{backgroundColor : "blue", color : "white", borderRadius : 0}} 
                        title={tooltip}> 
                    ?
                     </label>
                </div>
            </div>
            <div className={"row"}>
                {buttons.map((btn, i) => {                    
                    if(title === 'Forma'){ //muchas imagenes pequeñas
                        return <ButtonImg src={btn.src} label={btn.label} size={2} state={state} setState={setState} key={i}/>
                    } else{ //pocas imagenes necesitan ser mas grandes  
                        return <ButtonImg src={btn.src} label={btn.label} size={3} state={state} setState={setState} key={i}/>
                    }
                })}
            </div>
        </div>
    ) 
}

export default ButtonFilter;