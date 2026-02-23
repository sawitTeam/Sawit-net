import React from "react";
import style from './Button.module.css'

export const Button = ({text}) => {
    return(
        <>
        <button className={style.button}>{text}</button>
        </>
    )
}