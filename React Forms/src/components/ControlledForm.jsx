import { useState } from "react";

export default function ControlledForm() {

    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    
    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setAgeValue(e.target.value);
    }

    const resetFormHandler = () => {
        setUsernameValue('');
        setPasswordValue('');
        setAgeValue('');
    }

    const usernameBlurHandler = () => {
        console.log('on blur')
    }

    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text"
                     name="username"
                     id="username" 
                     value={usernameValue}
                     onChange={usernameChangeHandler} 
                     onBlur={usernameBlurHandler}/>
                </div>
                <div>
                    <label htmlFor="username">Password:</label>
                    <input type="password"
                     name="password"
                     id="password"
                     value={passwordValue}
                     onChange={passwordChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="username">Age:</label>
                    <input type="number"
                     name="age"
                     id="age" 
                     value={ageValue}
                     onChange={ageChangeHandler}/>
                </div>
                <div>
                    <button>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    );
};