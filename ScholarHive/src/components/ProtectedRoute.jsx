import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ()=>{
    const jwtToken= localStorage.getItem("token");
    if(!jwtToken) return <Navigate to="/signin" replace />
    else{
        return <Outlet/>
    }
}

export default ProtectedRoute;