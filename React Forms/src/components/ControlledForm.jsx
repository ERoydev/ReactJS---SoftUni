import { useState } from "react";

export default function ControlledForm() {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        email: '',
        gender: 'f',
        boxing: '',
        swimming: '',
    });
    
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


    return(
        <>
            <h1>UncrontrolledForm</h1>
            <form onSubmit={submitHandler}>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username"name="username" value={formState.username} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" value={formState.password} onChange={changeHandler}/>
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
                <button>Submit</button>
            </form>
        </>
    );
}