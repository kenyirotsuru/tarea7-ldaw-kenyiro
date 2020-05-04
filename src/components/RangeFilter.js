import React from "react";
import {RangeSlider} from "reactrangeslider";

const RangeFilter = ({title, tooltip, min, max, imageFrom, imageTo, step, state, setState}) => {

    const flag = imageFrom;
    
    const handleSetStateBySlider = (value) => {
       setState(value);

    }

    const handleSetStateByStart = (e) => {
       setState({
           start : parseInt(e.target.value),
           end : state.end
       })
    }

    const handleSetStateByEnd = (e) => {
       setState({
           start : state.start,
           end : parseInt(e.target.value)
       })
    }
   
   return (
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
           {flag != "" &&
            <div className={"row mb-3"}>
                <div className={"col px-0"}>
                    <img alt={"Minimum"} src={imageFrom} className={"float-left"}/>
                    <img alt={"Maximum"} src={imageTo} className={"float-right"}/>
                </div>
            </div>
            }
           <div className={"row mb-2"}>
               <div className={"col px-0"}>
                   <div style={{width : "100%"}}>
                       <RangeSlider 
                            step={step}
                            value={state}
                            min={min}
                            max={max}
                            onChange={handleSetStateBySlider}
                        />
                   </div>
               </div>
           </div>
           <div className={"row mb-2"}>
               <div className={"col px-0 range-input"}>
                   <input type={"number"} value={state.start} onChange={handleSetStateByStart}/>
               </div>
               <div className={"col px-0 range-input"}>
                   <input type={"number"} value={state.end} className={"float-right"} onChange={handleSetStateByEnd}/>
               </div>
           </div>
       </div>
   );
}

export default RangeFilter;