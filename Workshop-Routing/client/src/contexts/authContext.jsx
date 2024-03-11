import { createContext } from "react";

const AuthContext = createContext();
 
// To change Context name in my Browser Inspect and React Extension 
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children, 
    value
}) => {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext;