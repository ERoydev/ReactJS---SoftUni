import { useState,useRef,useEffect } from "react";
import styles from './ControlledForm.module.css';

const initialFormState = {

    username: '',
    password: '',
    email: '',
    gender: 'f',
    boxing: '',
    swimming: '',
}

export default function ControlledForm({
    formRef,
}) {
    const usernameInputRef = useRef();
    const isMountedRef = useRef(false);
    const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    // Executes only on update
    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }
        
        console.log('form is updated')
    }, [formState])
    
    const changeHandler = (e) => {
        let value = '';

        if (e.target.type === 'number') {
            value = Number(e.target.value);
        } 

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;

            case 'checkbox':
                value = e.target.checked;
                break;

            default:
                value = e.target.value;
                break;
        }

        setFormState(state => ({
            ...state,
            [e.target.name]: value,
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submited')
    }

    const resetFormHandler = (e) => {
        e.preventDefault();
        setFormState(initialFormState);
    }

    const ageValidator = () => {
        if (formState.age < 0 || formState.age > 120) {
            setErrors(state => ({
                ...state,
                age: 'Age should be between 0 and 120',}));
        } else {
            if (errors.age) {
                setErrors(state => ({
                    ...state,
                    age: ''
                }));
            }
        }
    }

    return(
        <>
            <h1>UncrontrolledForm</h1>
            <form ref={formRef} onSubmit={submitHandler}>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input ref={usernameInputRef} type="text" id="username"name="username" value={formState.username} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" value={formState.password} onChange={changeHandler}/>
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
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
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={formState.email} onChange={changeHandler}/>
                </div>

                <div>
                    <label htmlFor="gender">Gender</label >
                    <select name="gender" id="gender" value={formState.gender} onChange={changeHandler}>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                </div>

                <div>
                    <h1>Hobbies</h1>
                    <label htmlFor="boxing">Boxing</label>
                    <input type="checkbox" id="boxing" name='boxing' checked={formState.boxing}  onChange={changeHandler}/>
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" id="swimming" name='swimming' checked={formState.swimming} onChange={changeHandler}/>
                </div>
                <button type="submit" disabled={Object.values(errors).some(x => x)}>Register</button>
                <button onClick={resetFormHandler} type="button">Reset</button>
            </form>
        </>
    );
}