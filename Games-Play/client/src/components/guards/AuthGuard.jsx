import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard(props) {
    const { isAuthencticated } = useContext(AuthContext)

    if (!isAuthencticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}