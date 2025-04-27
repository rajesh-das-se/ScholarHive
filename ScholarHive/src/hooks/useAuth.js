import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAuth = () => {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    console.log("Iam here in auth");

    const verifyToken = useCallback(async () => {
        console.log("In verifyToken function");
        const token = localStorage.getItem("token");
        if (!token) {
            setIsAuthenticated(false);
            setUser({});
            console.log("Empty Token");
            return;
        }

        try {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/api/auth/verify", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setIsAuthenticated(true);
            setUser(res.data.user);
            console.log(user, isAuthenticated);
            console.log("Verification Done");

        } catch (err) {
            console.log("Token verification failed", err);
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            setUser({});
            console.log("Verification Error");
        }
    }, [])

    useEffect(() => {
        console.log("In useAuth useEffect");
        verifyToken();
    }, [verifyToken]);

    return { isAuthenticated, user, verifyToken };
}

export default useAuth;