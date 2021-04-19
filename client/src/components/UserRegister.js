import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router'

const UserRegister = (props) => {
    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("Last Name");
    const [phoneNumber, setPhoneNumber] = useState("Phone Number");
    const [role, setRole] = useState("Team Member");
    const [email, setEmail] = useState("Email");
    const [streetAddress, setStreetAddress] = useState("Street Address");
    const [city, setCity] = useState("City");
    const [state, setState] = useState();
    const [zipCode, setZipCode] = useState("Zip Code");
    const [password, setPassword] = useState("Password");
    const [confirmPassword, setConfirmPassword] = useState("Confirm Password");
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});

    const register = e => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            phoneNumber,
            role,
            email,
            streetAddress,
            city,
            state,
            zipCode,
            password,
            confirmPassword
        };
        axios.post("http://localhost:8000/api/user/register", 
        newUser, 
        {withCredentials: true})
            .then(res => {
                console.log(res.data)
                setFirstName("");
                setLastName("");
                setPhoneNumber();
                setRole("Team Member");
                setEmail("");
                setStreetAddress("");
                setCity("");
                setState("");
                setZipCode();
                setPassword("");
                setConfirmPassword("");
                setConfirmReg("Thank you for Registering, you can now log in!")
            })
            .catch((err) => {
                console.log(err);
                setErrs(err.response.data.errors)
            });
    };

    return (
        <div>
            <header>
                <p>Already a Member?</p>
                <Link to={'/login'}>Log In</Link>
            </header>
            <h2>Welcome to the Turnovur Team</h2>
            {
                confirmReg ? <p>{confirmReg}</p>
                : null
            }
            <form onSubmit={register}>
                <div>
                    <input
                        type="text"
                        name="First Name"
                        label="First Name"
                        value={firstName}
                        onClick = {(e) => setFirstName("")}
                        onChange= {(e) => setFirstName(e.target.value)}
                    />
                    {
                    errs.firstName ?
                    <p className="error-text">{errs.firstName.message}</p>
                    : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Last Name"
                        value= {lastName}
                        onClick = {(e) => setLastName("")}
                        onChange= {(e) => setLastName(e.target.value)}
                    />
                    {
                        errs.lastName ?
                        <p className="error-text">{errs.lastName.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        id= "Phone Number"
                        name= "Phone Number"
                        value= {phoneNumber}
                        onClick = {(e) => setPhoneNumber("")}
                        onChange= {(e) => setPhoneNumber(e.target.value)}
                    />
                    {
                        errs.phoneNumber ?
                        <p className="error-text">{errs.phoneNumber.message}</p>
                        : null
                    }
                </div>
                <div>
                    <select
                        name= "Role"
                        value= {role}
                        onChange= {(e) => setRole(e.target.value)}
                    >
                        <option value="Team Member">Team Member</option>
                        <option vaule="Admin">Admin</option>
                    </select>
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Email"
                        value= {email}
                        onClick = {(e) => setEmail("")}
                        onChange= {(e) => setEmail(e.target.value)}
                    />
                    {
                        errs.email ?
                        <p className="error-text">{errs.email.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Street Address"
                        value= {streetAddress}
                        onClick = {(e) => setStreetAddress("")}
                        onChange= {(e) => setStreetAddress(e.target.value)}
                    />
                    {
                        errs.streetAddress ?
                        <p className="error-text">{errs.streetAddress.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "City"
                        value= {city}
                        onClick = {(e) => setCity("")}
                        onChange= {(e) => setCity(e.target.value)}
                    />
                    {
                        errs.city ?
                        <p className="error-text">{errs.city.message}</p>
                        : null
                    }
                </div>
                <div>
                    <select
                        name= "State"
                        value= {state}
                        onChange= {(e) => setState(e.target.value)}
                    >
                        <option value="Null">-Select State-</option>
                        <option value="Alabama">AL</option>
                        <option vaule="Alaska">AK</option>
                        <option vaule="Arizona">AZ</option>
                        <option vaule="Arkansas">AR</option>
                        <option vaule="California">CA</option>
                        <option vaule="Colorado">CO</option>
                        <option vaule="Connecticut">CT</option>
                        <option vaule="District of Columbia">DC</option>
                        <option vaule="Delaware">DE</option>
                        <option vaule="Florida">FL</option>
                        <option vaule="Georgia">GA</option>
                        <option vaule="Hawaii">HI</option>
                        <option vaule="Idaho">ID</option>
                        <option vaule="Illinois">IL</option>
                        <option vaule="Indiana">IN</option>
                        <option vaule="Iowa">IA</option>
                        <option vaule="Kansas">KS</option>
                        <option vaule="Kentucky">KY</option>
                        <option vaule="Louisiana">LA</option>
                        <option vaule="Maine">ME</option>
                        <option vaule="Maryland">MD</option>
                        <option vaule="Massachusetts">MA</option>
                        <option vaule="Michigan">MI</option>
                        <option vaule="Minnesota">MN</option>
                        <option vaule="Mississippi">MS</option>
                        <option vaule="Missouri">MO</option>
                        <option vaule="Montana">MT</option>
                        <option vaule="Nebraska">NE</option>
                        <option vaule="Nevada">NV</option>
                        <option vaule="New Hampshire">NH</option>
                        <option vaule="New Jersey">NJ</option>
                        <option vaule="New Mexico">NM</option>
                        <option vaule="New York">NY</option>
                        <option vaule="North Carolina">NC</option>
                        <option vaule="North Dakota">ND</option>
                        <option vaule="Ohio">OH</option>
                        <option vaule="Oklahoma">OK</option>
                        <option vaule="Oregon">OR</option>
                        <option vaule="Pennsylvania">PA</option>
                        <option vaule="Rhode Island">RI</option>
                        <option vaule="South Carolina">SC</option>
                        <option vaule="South Dakota">SD</option>
                        <option vaule="Tennessee">TN</option>
                        <option vaule="Texas">TX</option>
                        <option vaule="Utah">UT</option>
                        <option vaule="Vermont">VT</option>
                        <option vaule="Virginia">VA</option>
                        <option vaule="Washington">WA</option>
                        <option vaule="West Viginia">WV</option>
                        <option vaule="Wisconsin">WI</option>
                        <option vaule="Wyoming">WY</option>
                    </select>
                    {
                        errs.state ?
                        <p className="error-text">{errs.state.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "number"
                        name= "Zip Code"
                        value= {zipCode}
                        onClick = {(e) => setZipCode()}
                        onChange= {(e) => setZipCode(e.target.value)}
                    />
                    {
                        errs.zipCode ?
                        <p className="error-text">{errs.zipCode.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Password"
                        value= {password}
                        onClick = {(e) => setPassword("")}
                        onChange= {(e) => setPassword(e.target.value)}
                    />
                    {
                        errs.password ?
                        <p className="error-text">{errs.password.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Confirm Password"
                        value= {confirmPassword}
                        onClick = {(e) => setConfirmPassword("")}
                        onChange= {(e) => setConfirmPassword(e.target.value)}
                    />
                    {
                        errs.confirmPassword ?
                        <p className="error-text">{errs.confirmPassword.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default UserRegister
