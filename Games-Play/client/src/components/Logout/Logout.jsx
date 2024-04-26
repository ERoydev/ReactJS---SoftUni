import { useContext, useEffect } from "react";
import * as authService from '../../services/authService';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import Path from "../../Paths";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
        // If succesfully logout from server then logout from client (' clean auth state ')
            .then(() => {
                logoutHandler();
                navigate(Path.Home);
            })
            .catch(() => {
                logoutHandler();
                navigate(Path.Login) 
            });
    }, [])

    return null;
}