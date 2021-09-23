import React from 'react';

import "./styles.css"

const FirstStep = ({ signupData, setSignupData }) => {
    return (
        <form>
            <div className="nameInputs">
                <input name="firstName" placeholder="First Name" type="text" value={signupData.firstName} onChange={(e) => setSignupData({ ...signupData, [e.target.name]: e.target.value })}/>
                <input name="lastName" placeholder="Last Name" type="text" value={signupData.lastName} onChange={(e) => setSignupData({ ...signupData, [e.target.name]: e.target.value })}/>
            </div>
            <input name="email" placeholder="Email" type="text" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, [e.target.name]: e.target.value })}/>
            <input name="password" placeholder="Password" type="password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, [e.target.name]: e.target.value })}/>
            <input name="confirmPassword" placeholder="Confirm Password" type="password" value={signupData.confirmPassword} onChange={(e) => setSignupData({ ...signupData, [e.target.name]: e.target.value })}/>
        </form>
    )
}

export default FirstStep;