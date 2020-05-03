import React from "react";

const Button = ({label, color,submit}) => {
    return(
        <button className={`btn color-${color}`} onClick={submit}>{label}</button>
    ) 
}

export default Button;