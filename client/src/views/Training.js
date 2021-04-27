import React, {useEffect, useState} from 'react';
import UserTrainingForm from '../components/UserTrainingForm'
import axios from 'axios';
import { navigate } from '@reach/router'

const Training = (props) => {
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
        <div className="Training">
            <h2 className="title" >LET'S GET STARTED</h2>
            <p>
                Welcome to Turnovur! We are excited to have you join our team. 
                In addition to in person traning provided by the cleaning supervisor, please complete
                the following onboarding tasks:
            </p>
            {loaded && (
                <UserTrainingForm
                    initialOne= {user.completedOne}
                    initialTwo= {user.completedTwo}
                    initialThree= {user.completedThree}
                    initialFour= {user.completedFour}
                    initialFive= {user.completedFive}
                    initialSix= {user.completedSix}
                    initialSeven= {user.completedSeven}
                    onSubmitProp= {updateUser}
                />
            )}
        </div>
    )
}

export default Training