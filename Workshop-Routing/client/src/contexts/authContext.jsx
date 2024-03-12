import { createContext, useState } from "react";
import * as authService from '../services/authService';
import { useNavigate } from "react-router-dom";
import usePersistedState from "../hooks/usePersistedState";
import Path from "../Paths";

const AuthContext = createContext();
 
// To change Context name in my Browser Inspect and React Extension 
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children, 
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        if (result.code) {
        console.log('Error with login')
        } else {
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home)
        }
    }

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password)
        
        if (values.password !== values.confirmPassword) {
        console.log("Error with Register")
        } else {
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
        }
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
        
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext;