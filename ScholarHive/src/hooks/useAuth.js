import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = ()=>{
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] =useState(false);
    console.log("Iam here in auth");
    useEffect(()=>{
        const verifyToken = async ()=>{
            const token= localStorage.getItem("token");
            if(!token){
                setIsAuthenticated(false);
                return;
            }
            
            try{
                const res= await axios.get(import.meta.env.VITE_API_URL + "/api/auth/verify", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setIsAuthenticated(true);
                setUser(res.data.user);
                console.log(user, isAuthenticated);

            }catch(err){
                localStorage.removeItem("token");
                setIsAuthenticated(false);
            }
        }
        verifyToken();
    }, []);

    return {isAuthenticated, user};
}

export default useAuth;