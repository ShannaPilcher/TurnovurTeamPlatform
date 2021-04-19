import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const UserLogin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/login", {
            email: email,
            password: password,
        }, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
                navigate("/profile")
            })
            .catch((err => {
                console.log(err);
                setError(err.res.data.msg)
            }));
    };
    return (
        <div>
            <h2>Welcome Back</h2>
            <form onSubmit={login}>
                <div>
                    <label>Email</label>
                    <input
                        type= "text"
                        name= "email"
                        value= {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type= "text"
                        name= "password"
                        value= {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        type= "submit"
                    >Log In</button>
                </div>
            </form>
        </div>
    )
}

export default UserLogin