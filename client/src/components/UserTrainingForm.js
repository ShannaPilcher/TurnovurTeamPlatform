import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'

const UserTrainingForm = (props) => {
    const { 
        initialOne,
        initialTwo,
        initialThree,
        initialFour,
        initialFive,
        initialSix,
        initialSeven,
        onSubmitProp
    } = props;
    const [completedAll, setCompletedAll] = useState(false);
    const [completedOne, setCompletedOne] = useState(initialOne);
    const [completedTwo, setCompletedTwo] = useState(initialTwo);
    const [completedThree, setCompletedThree] = useState(initialThree);
    const [completedFour, setCompletedFour] = useState(initialFour);
    const [completedFive, setCompletedFive] = useState(initialFive);
    const [completedSix, setCompletedSix] = useState(initialSix);
    const [completedSeven, setCompletedSeven] = useState(initialSeven);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({
            completedOne,
            completedTwo,
            completedThree,
            completedFour,
            completedFive,
            completedSix,
            completedSeven
        });
    }
    return(
        <div className="trainingForm" >
            <form onSubmit= {onSubmitHandler}>
                <div>
                    <input 
                        type="checkbox"
                        name="1"
                        checked= {completedOne}
                        onChange= {(e) => setCompletedOne(!completedOne)}
                    />
                    <label>Download and fill out W-9</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        name="2"
                        checked= {completedTwo}
                        onChange= {(e) => setCompletedTwo(!completedTwo)}
                    />
                    <label>Download and fill out Direct Deposit Form</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        name="3"
                        checked= {completedThree}
                        onChange= {(e) => setCompletedThree(!completedThree)}
                    />
                    <label>Download and fill out Contractor Agreement Form</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        name="4"
                        checked= {completedFour}
                        onChange= {(e) => setCompletedFour(!completedFour)}
                    />
                    <label>Email all onboarding forms to hello@turnovur.com</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        name="5"
                        checked= {completedFive}
                        onChange= {(e) => setCompletedFive(!completedFive)}
                    />
                    <label>Fill out QuickBooks info</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        name="6"
                        checked= {completedSix}
                        onChange= {(e) => setCompletedSix(!completedSix)}
                    />
                    <label>Read through entire Welcome Packet</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        name="1"
                        checked= {completedSeven}
                        onChange= {(e) => setCompletedSeven(!completedSeven)}
                    />
                    <label>Fill out your availability</label>
                </div>
                <button onClick = {() => navigate("/profile")}>Cancel</button>
                <button type= "submit">Update</button>
            </form>
        </div>
    )
}

export default UserTrainingForm