import React from "react";
import './style/login.css'
import { Button } from "../component/button";
import { Form } from "../component/form";

export const Login = () =>{
    return(
        <>
        <div className="container">

            <div className="image">
                <img src="" alt="Image" className="logo"/>
            </div>

            <div className="menu">
                <div className="title">
                     <h1>Welcome back</h1>
                </div>

                <div className="dirrectToSignUp">
                    <p>Don't have account yet? <a href="#">Sign up</a></p>
                </div>

                <div className="form">
                    <Form text="Email Address"></Form>
                    <Form text="Password"></Form>
                </div>
                <div className="button">
                    <Button text="Login"></Button>
                </div>

                <div className="otherChoise">

                </div>


            </div>
        </div>
        </>
    )
}