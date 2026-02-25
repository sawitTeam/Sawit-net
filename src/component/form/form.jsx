import React from "react";
import style from './Form.module.css'

export const Form = ({text}) => {
    return(
        <>
        <div className={style.container}>
            <h1 className={style.title}>{text}</h1>
            <input type="text" className={style.input}></input>
        </div>
        </>
    )
}