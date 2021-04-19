import React, {useEffect, useState} from 'react';
import EditForm from '../components/EditForm';
import axios from 'axios';
import { navigate } from '@reach/router'

const Edit = (props) => {
    const [user, setUser] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/loggedin", {withCredentials: true})
            .then(res => {
                console.log(res.data)
                setUser(res.data)
                setLoaded(true)
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }, [])

    const updateUser = user => {
        axios.put("http://localhost:8000/api/users/" + props.id, user, {withCredentials: true})
            .then(res => {
                console.log(res)
                setUser(res)
                navigate('/profile')
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return(
        <div>
            <h2>Edit Profile</h2>
            {loaded && (
                <EditForm
                    initialImage= {user.profileURL}
                    initialFirstName= {user.firstName}
                    initialLastName= {user.lastName}
                    initialPhoneNumber= {user.phoneNumber}
                    initialEmail= {user.email}
                    initialStreetAddress= {user.streetAddress}
                    initialCity= {user.city}
                    initialZipCode= {user.zipCode}
                    initialstate= {user.state}
                    onSubmitProp = {updateUser}
                    errors= {errors}
                    id= {user._id}
                />
            )}
        </div>
    )
}

export default Edit