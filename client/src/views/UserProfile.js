//main view for user (will have a separate main view for admin)
//display user details using getOne route 
//include button components & forms for separate pages/views (new route, passing in props)
import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import moment from 'moment'

const UserProfile = (props) => {
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})
    const [completeAll, setCompleteAll] = useState("Status: In Progress")

    const completeTraining = () => {
        if(user.completedOne === true && 
            user.completedTwo === true &&
            user.completedThree === true &&
            user.completedFour === true &&
            user.completedFive === true &&
            user.completedSix === true &&
            user.completedSeven === true
        ) {
            setCompleteAll("Status: Onboarding Complete")
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/loggedin", {withCredentials: true})
            .then(res => {
                console.log(res.data)
                setUser(res.data)
                completeTraining();
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }, [])

    return(
        <div>
            <div>
                <img className="profileImage" src={user.profileURL} alt="Profile Picture"/>
                <h4>{user.firstName} {user.lastName}</h4>
            </div>
            <div>
                <p>{user.role}</p>
                <p>Start Date: {moment(user.createdAt).format('MMMM Do YYYY')}</p>
                <p>{completeAll}</p>
            </div>
            <hr/>
            <Link to={'/training/' + user._id}>Complete Onboarding</Link>
            <Link to={'/edit/' + user._id}>Edit your Info</Link>
            <Link to={'/availability/' + user._id}>Edit Your Availability</Link>
        </div>
    )
};

export default UserProfile