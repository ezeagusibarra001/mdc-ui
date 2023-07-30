import React from "react";
import "./Input.css";


const Input = ({type} : {type: string}) => {
    return (
       <input type={type} />
    );
};

export default Input;