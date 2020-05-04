import React from "react";

const ButtonImg = ({src, label, size, state, setState}) => {
    const bgc = state === label ? "#dcdde6" : "white";
    const handleSetState = (_e) => {
        setState(label);
    }

    return(
        <div className={`col-${size} px-0 py-0`}>
            <button className={"btn text-center w-100 h-100"}
                    style={{borderRadius : 0, borderColor : "blue", backgroundColor : bgc, fontSize : "15px"}}
                    onClick={handleSetState}>
                <img alt={label} src={src} onClick={handleSetState}/>{label}
            </button>
        </div>
    )
}

export default ButtonImg;