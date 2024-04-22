import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import { useNavigate, Navigate } from "react-router-dom";

export default function AuthGuard(props) {
    const { isAuthencticated } = useContext(AuthContext)
    const navigate = useNavigate();


    if (!isAuthencticated) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            {props.children}
        </>
    )
}