import React, { useState, useEffect } from 'react';
import {navigate} from '@reach/router'

const UserAvailabilityForm = (props) => {
    const { 
        initialMonday,
        initialTuesday,
        initialWednesday,
        initialThursday,
        initialFriday,
        initialSaturday,
        initialSunday,
        onSubmitProp
    } = props;
    const [monday, setMonday] = useState(initialMonday);
    const [tuesday, setTuesday] = useState(initialTuesday);
    const [wednesday, setWednesday] = useState(initialWednesday);
    const [thursday, setThursday] = useState(initialThursday);
    const [friday, setFriday] = useState(initialFriday);
    const [saturday, setSaturday] = useState(initialSaturday);
    const [sunday, setSunday] = useState(initialSunday);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday
        });
    }
    return(
        <div className="Form">
            <form onSubmit= {onSubmitHandler}>
                <div className="availabilityForm">
                    <div>
                        <input 
                            type="checkbox"
                            name="monday"
                            checked= {monday}
                            onChange= {(e) => setMonday(!monday)}
                        />
                        <label>Monday</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox"
                            name="tuesday"
                            checked= {tuesday}
                            onChange= {(e) => setTuesday(!tuesday)}
                        />
                        <label>Tuesday</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox"
                            name="wednesday"
                            checked= {wednesday}
                            onChange= {(e) => setWednesday(!wednesday)}
                        />
                        <label>Wednesday</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox"
                            name="thursday"
                            checked= {thursday}
                            onChange= {(e) => setThursday(!thursday)}
                        />
                        <label>Thursday</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox"
                            name="friday"
                            checked= {friday}
                            onChange= {(e) => setFriday(!friday)}
                        />
                        <label>Friday</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox"
                            name="saturday"
                            checked= {saturday}
                            onChange= {(e) => setSaturday(!saturday)}
                        />
                        <label>Saturday</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox"
                            name="sunday"
                            checked= {sunday}
                            onChange= {(e) => setSunday(!sunday)}
                        />
                        <label>Sunday</label>
                    </div>
                </div>
                <div>
                    <button onClick = {() => navigate("/profile")}>Cancel</button>
                    <button type= "submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UserAvailabilityForm