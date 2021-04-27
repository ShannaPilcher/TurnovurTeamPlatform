import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const LogoutButton = () => {
    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data);
                navigate("/login");
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <span className="logOut">
            <button onClick={(e) => logout(e) }>Log Out</button>
        </span>
    )
}

export default LogoutButton