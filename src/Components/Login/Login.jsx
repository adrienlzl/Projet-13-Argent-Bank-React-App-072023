import React, {useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import {setToken} from "../../Actions/token.action";
import { useDispatch } from "react-redux";
import {loginUser} from "../../Api/api.call";

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
        loginUser(data)
            .then((responseData) => {
                const token = responseData.body.token;
                dispatch(setToken(token));

                reset();
                navigate("/User");
            })
            .catch((error) => {
                console.log("Erreur lors de la connexion (catch)", error);
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
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>Ce champ est requis.</span>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...register("password", { required: true })}
                        />
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