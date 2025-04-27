import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = ()=>{
    const {user} = useContext(AuthContext);
    
    return (
        <div>
            <div>
                Welcome to Dashboard {user.fullname}.
            </div>
        </div>
    )
}

export default Dashboard;