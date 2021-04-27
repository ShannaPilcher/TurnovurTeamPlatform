import React, { useState } from 'react';
import { navigate } from '@reach/router'

const EditForm = (props) => {
    const {
        initialImage,
        initialFirstName,
        initialLastName,
        initialPhoneNumber,
        initialEmail,
        initialStreetAddress,
        initialCity,
        initialstate,
        initialZipCode,
        onSubmitProp,
        errors
    } = props;
    const [profileURL, setProfileURL] = useState(initialImage);
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
    const [email, setEmail] = useState(initialEmail);
    const [streetAddress, setStreetAddress] = useState(initialStreetAddress);
    const [city, setCity] = useState(initialCity);
    const [state, setState] = useState(initialstate);
    const [zipCode, setZipCode] = useState(initialZipCode);
    const [password, setPassword] = useState("Password");
    const [confirmPassword, setConfirmPassword] = useState("Confirm Password");

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({
            profileURL,
            firstName,
            lastName,
            phoneNumber,
            email,
            streetAddress,
            city,
            state,
            zipCode,
            password,
            confirmPassword
        })
    }

    return (
        <div className="editForm">
            <form onSubmit={onSubmitHandler}>
                <div>
                    <img className="profileImage" src={profileURL} alt="Profile Picture"/><br/>
                    <input
                        type="text"
                        name="Profile URL"
                        value={profileURL}
                        onChange= {(e) => setProfileURL(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="First Name"
                        value={firstName}
                        onChange= {(e) => setFirstName(e.target.value)}
                    />
                    {
                    errors.firstName ?
                    <p className="error-text">{errors.firstName.message}</p>
                    : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Last Name"
                        value= {lastName}
                        onChange= {(e) => setLastName(e.target.value)}
                    />
                    {
                        errors.lastName ?
                        <p className="error-text">{errors.lastName.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Phone Number"
                        value= {phoneNumber}
                        onChange= {(e) => setPhoneNumber(e.target.value)}
                    />
                    {
                        errors.phoneNumber ?
                        <p className="error-text">{errors.phoneNumber.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Email"
                        value= {email}
                        onChange= {(e) => setEmail(e.target.value)}
                    />
                    {
                        errors.email ?
                        <p className="error-text">{errors.email.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Street Address"
                        value= {streetAddress}
                        onChange= {(e) => setStreetAddress(e.target.value)}
                    />
                    {
                        errors.streetAddress ?
                        <p className="error-text">{errors.streetAddress.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "City"
                        value= {city}
                        onChange= {(e) => setCity(e.target.value)}
                    />
                    {
                        errors.city ?
                        <p className="error-text">{errors.city.message}</p>
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
                        errors.state ?
                        <p className="error-text">{errors.state.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "number"
                        name= "Zip Code"
                        value= {zipCode}
                        onChange= {(e) => setZipCode(e.target.value)}
                    />
                    {
                        errors.zipCode ?
                        <p className="error-text">{errors.zipCode.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Password"
                        value= {password}
                        onChange= {(e) => setPassword(e.target.value)}
                    />
                    {
                        errors.password ?
                        <p className="error-text">{errors.password.message}</p>
                        : null
                    }
                </div>
                <div>
                    <input 
                        type= "Text"
                        name= "Confirm Password"
                        value= {confirmPassword}
                        onChange= {(e) => setConfirmPassword(e.target.value)}
                    />
                    {
                        errors.confirmPassword ?
                        <p className="error-text">{errors.confirmPassword.message}</p>
                        : null
                    }
                </div>
                <button onClick = {() => navigate("/profile")}>Cancel</button>
                <button type= "submit">Update</button>
            </form>
        </div>
    )
}

export default EditForm