import { useState } from "react";

const formInitialState = {
    username: '',
    password: '',
    age: '',
}

export default function ControlledForm() {

    const [formState, setFormState] = useState(formInitialState);
    
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

    return (
        <>
            <h1>Controlled Form</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text"
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
                    <button>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    );
};