import React, {useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import {setToken} from "../../Actions/token.action";
import { useDispatch } from "react-redux";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [tokenData, setTokenData] = useState()

    useEffect(() => {

    }, [tokenData]);

    const onSubmit = (data) => {

        return fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.log("Erreur lors de la connexion");
                }
            })
            .then((data) => {
                const token = data.body.token;
                dispatch(setToken(token));

                reset();
                navigate("/User");
            })
            .catch((error) => {
                console.log("Erreur lors de la connexion (catch)");
            });
    };

    return (
        <div className=" bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1 className="sign-in-title">Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="username"
                            {...register("email", { required: true })} // Utilisez le champ "email" au lieu de "username"
                        />
                        {/* Affichez les erreurs liées au champ "email" */}
                        {errors.email && <span>Ce champ est requis.</span>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...register("password", { required: true })} // Champ "password" requis
                        />
                        {/* Affichez les erreurs liées au champ "password" */}
                        {errors.password && <span>Ce champ est requis.</span>}
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Login;