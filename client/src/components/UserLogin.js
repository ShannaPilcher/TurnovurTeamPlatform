import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/login", {
            email: email,
            password: password,
        }, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                navigate("/profile")
            })
            .catch(err => {
                console.log(err);
                setError(err.response.data.msg)
            });
    };
    return (
        <div className= "UserLogin">
            <h2 className="title" >Welcome Back</h2>
            <form className= "login" onSubmit={login}>
                <div>
                    <input
                        type= "text"
                        name= "email"
                        placeholder= "Email"
                        value= {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type= "password"
                        name= "password"
                        placeholder= "Password"
                        value= {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type= "submit">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default UserLogin