import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    console.log("Iam here in auth");

    useEffect(() => {
        console.log("In useAuth useEffect");
        const verifyToken = async () => {
            console.log("In verifyToken function");
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const res = await axios.get(import.meta.env.VITE_API_URL + "/api/auth/verify", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log(res)
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
            }
        };
        verifyToken();
    }, []);

    const signIn = (token, userData) => {
        localStorage.setItem("token", token);
        setUser(userData);
        setIsAuthenticated(true);
    };

    const signOut = () => {
        localStorage.removeItem("token");
        setUser({});
        setIsAuthenticated(false);
    };

    return { isAuthenticated, user, signIn, signOut };
}

export default useAuth;