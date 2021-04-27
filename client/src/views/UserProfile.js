//main view for user (will have a separate main view for admin)
//display user details using getOne route 
//include button components & forms for separate pages/views (new route, passing in props)
import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import moment from 'moment'
import LogoutButton from '../components/UserLogoutButton';

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
                completeTraining();
                setUser(res.data)
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }, [])

    return(
        <div className="UserProfile" >
            <div className="profileName" >
                <img className="profileImage" src={user.profileURL} alt="Profile Picture"/>
                <h4>{user.firstName} {user.lastName}</h4>
            </div>
            <div className="profileDetails" >
                <p>{user.role}</p>
                <p>Start Date: {moment(user.createdAt).format('MMMM Do YYYY')}</p>
                <p>{completeAll}</p>
                <span>Availability: </span>
                {
                    user.sunday ? <span>S</span>
                    : null
                }
                {
                    user.monday ? <span> M</span>
                    : null
                }
                {
                    user.tuesday ? <span> T</span>
                    : null
                }
                {
                    user.wednesday ? <span> W</span>
                    : null
                }
                {
                    user.thursday ? <span> Th</span>
                    : null
                }
                {
                    user.friday ? <span> F</span>
                    : null
                }
                {
                    user.saturday ? <span> Sa</span>
                    : null
                }
            </div>
            <hr/>
            <div className="left" >
                {/* <img className="icon" src="https://www.clipartmax.com/png/small/6-60237_judge-dalton-checkbox-png.png" alt="Judge Dalton - Checkbox .png @clipartmax.com"></img> */}
                <p><Link to={'/training/' + user._id}>Complete Onboarding</Link></p>
                {/* <img className= "icon" src="https://www.clipartmax.com/png/small/219-2198823_identity-card-comments-icon.png" alt="Identity Card Comments - Icon @clipartmax.com"></img> */}
                <p><Link to={'/edit/' + user._id}>Edit your Info</Link></p>
            </div>
            <div className="right" >
                {/* <img className= "icon" src="https://www.clipartmax.com/png/small/26-268070_check-in-calendar-icon-png.png" alt="Check-in - - Calendar Icon Png @clipartmax.com"></img> */}
                <p><Link to={'/availability/' + user._id}>Edit Your Availability</Link></p>
                {/* <img className= "icon" src="https://www.clipartmax.com/png/small/217-2179353_exit-clipart-svg-computer-power-button-icon.png" alt="Exit Clipart Svg - Computer Power Button Icon @clipartmax.com"></img> */}
                <LogoutButton />
            </div>
        </div>
    )
};

export default UserProfile