import React, {useEffect, useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton'
import './styles.css'

const UserList = () => {
    const[allUsers, setAllUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then((res) => {
                console.log(res.data)
                setAllUsers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const sortedUsers = 
        allUsers.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
        });
        console.log(allUsers)

    const removeFromDom = UserId => {
        setAllUsers(allUsers.filter(user => user._id !== userId))
    }

    return(
        <div>
            {
                sortedUsers.map((user, idx) => {
                    return(
                        <div key= {idx}>
                            <div>
                                <img src={user.imageUrl}/>
                            </div>
                            <div>
                                <h4>{user.firstName}{user.lastName}</h4>
                                <DeleteButton user = {user} userId= {user._id} successCallback = {() => removeFromDom(user._id)}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList