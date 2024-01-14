import { useRef, useState, useEffect } from "react";

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: '',
    swimming: false,
    boxing: false,
    running: false,
}

export default function ControlledForm({
    formRef,
}) {

    const usernameInputRef = useRef();
    const [formState, setFormState] = useState(formInitialState);
    
    useEffect(() => {
        usernameInputRef.current.focus();
    }, [])

    const changeHandler = (e) => {
        setFormState(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const resetFormHandler = () => {
        setFormState(formInitialState);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formState)
        resetFormHandler();
    }

    const onCheckboxChange = (e) => {
        setFormState(state => ({
            ...state,
            [e.target.name]: e.target.checked
        }))
    }

    return (
        <>
            <h1>Controlled Form</h1>

            <form onSubmit={submitHandler} ref={formRef}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text"
                    ref={usernameInputRef}
                     name="username"
                     id="username" 
                     value={formState.username}
                     onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="username">Password:</label>
                    <input type="password"
                     name="password"
                     id="password"
                     value={formState.password}
                     onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="username">Age:</label>
                    <input type="number"
                     name="age"
                     id="age" 
                     value={formState.age}
                     onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" value={formState.gender} onChange={changeHandler}>
                        <option value="f">F</option>
                        <option value="M">M</option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formState.swimming} onChange={onCheckboxChange} />

                    <label htmlFor="boxing">Boxing</label>
                    <input type="checkbox" name="boxing" id="boxing" checked={formState.boxing} onChange={onCheckboxChange} />

                    <label htmlFor="running">Running</label>
                    <input type="checkbox" name="running" id="running" checked={formState.running} onChange={onCheckboxChange}/>
                </div>

                <div>
                    <button type="submit">Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                    
                </div>
            </form>
        </>
    );
};