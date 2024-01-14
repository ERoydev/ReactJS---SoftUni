import { useRef, useState, useEffect } from "react";
import styles from './ControlledForm.module.css';

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
    const isMountedRef = useRef(false);
    const [formState, setFormState] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, [])

    // Executes only on update

    useEffect(() => {
        if(!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }

        console.log('Form is updated')
    }, [formState]);

    const changeHandler = (e) => {
        setFormState(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const resetFormHandler = () => {
        setFormState(formInitialState);
        setErrors({});
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

    const ageValidator = (e) => {

        if (formState.age < 0 || formState.age > 120) {
            setErrors(state => ({
                ...state,
                age: 'Age should be between 0 and 120'
            }));
        } else {
            if (errors.age) {
                setErrors(state => ({
                    ...state,
                    age: ''
                }));
            }
        }
    }

    const passwordValidator = (e) => {
        if (formState.password.length <= 10) {
            setErrors(state => ({
                ...state,
                password: 'Password should be longer than 10 symbols'
            }))
        } else {
            if (errors.password) {
                setErrors(state => ({
                    ...state,
                    password: ''
                }));
            }
        }
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
                     onChange={changeHandler}
                     onBlur={passwordValidator}
                     />
                     {errors.password && (
                        <p className={styles.errorMessage}>{errors.password}</p>
                     )}
                </div>
                <div>
                    <label htmlFor="username">Age:</label>
                    <input type="number"
                     name="age"
                     id="age" 
                     value={formState.age}
                     onChange={changeHandler}
                     onBlur={ageValidator}
                     className={errors.age && styles.inputError}
                     />
                     {errors.age && (
                        <p className={styles.errorMessage}>{errors.age}</p>
                     )}
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
                    <button type="submit" disabled={Object.values(errors).some(x => x)}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                    
                </div>
            </form>
        </>
    );
};