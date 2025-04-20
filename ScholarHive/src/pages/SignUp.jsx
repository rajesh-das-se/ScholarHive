import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import axios from "axios"

const SignUp = () => {

    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errorMsg, setErrorMsg] = useState("");
    const navigate= useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        setErrorMsg("");
        
        if(userData.password!==userData.confirmPassword){
            setErrorMsg("Passwords do not match");
            return;
        }

        try{
            const res=await axios.post(import.meta.env.VITE_API_URL+"/api/auth/signup", userData);
            navigate("/signin", {state: {success: "Account created successfully. Please log in."}});
        }catch(err){
            if(err.response && err.response.data && err.response.data.error){
                setErrorMsg(err.response.data.error);
            }else{
                setErrorMsg("Something went wrong. Please try again.");
            }
        }
    }

    return (
        <div className="min-h-[calc(100vh-7vh)] flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md border border-gray-400 rounded-xl shadow-md p-8">
                <p className="text-center"><Logo size='2' /></p>
                <p className="text-center text-gray-600 mb-6">Create your account</p>
                {errorMsg && (
                    <div className="bg-red-100 text-red-700 border border-red-300 p-2 rounded-md text-sm mb-4">
                        {errorMsg}
                    </div>
                )}
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            value={userData.fullname}
                            onChange={(e) => { setUserData((prevUserData) => { return { ...prevUserData, fullname: e.target.value } }) }}
                            placeholder="Name"
                            className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={userData.email}
                            onChange={(e) => { setUserData((prevUserData) => { return { ...prevUserData, email: e.target.value } }) }}
                            placeholder="you@example.com"
                            className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={userData.password}
                            onChange={(e) => { setUserData((prevUserData) => { return { ...prevUserData, password: e.target.value } }) }}
                            placeholder="********"
                            className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            required
                            value={userData.confirmPassword}
                            onChange={(e) => { setUserData((prevUserData) => { return { ...prevUserData, confirmPassword: e.target.value } }) }}
                            placeholder="********"
                            className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 py-2 text-white rounded-lg hover:bg-blue-700 transition duration-200">Sign Up</button>
                </form>
                <p className="text-sm mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to='/signin' className="text-blue-600">Sign in</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp;