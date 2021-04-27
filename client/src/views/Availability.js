import React, {useEffect, useState} from 'react';
import UserAvailabilityForm from '../components/UserAvailabilityForm'
import axios from 'axios';
import { navigate } from '@reach/router'

const Availability = (props) => {
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
                navigate('/profile')
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return(
        <div className="Availability" >
            <h2 className="title" >Availability</h2>
            <p>
                Please choose days you are available to work at least between 11am and 4pm. 
                Please leave any notes you would like admin to be considerate of when scheduling you.
            </p><br/>
            {loaded && (
                <UserAvailabilityForm
                    initialMonday= {user.monday}
                    initialTuesday= {user.tuesday}
                    initialWednesday= {user.wednesday}
                    initialThursday= {user.thursday}
                    initialFriday= {user.friday}
                    initialSaturday= {user.saturday}
                    initialSunday= {user.sunday}
                    onSubmitProp= {updateUser}
                />
            )}
        </div>
    )
}

export default Availability