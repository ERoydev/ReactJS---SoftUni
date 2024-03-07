import { createContext } from "react";

const AuthContext = createContext();
 
// To change Context name in my Browser Inspect and React Extension 
AuthContext.displayName = 'AuthContext';
export default AuthContext;