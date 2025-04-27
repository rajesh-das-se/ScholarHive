import { useEffect, useState} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";

const SignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const {verifyToken}=useAuth()

    useEffect(()=>{
        if(location.state && location.state.success){
            setSuccessMsg(location.state.success);
            window.history.replaceState({}, document.title);
        }
    }, [location.state])

    const handleSignIn= async (e)=>{
        console.log("In Sign in function");
        e.preventDefault();
        setSuccessMsg("");
        setErrorMsg("");

        try{
            const res= await axios.post(import.meta.env.VITE_API_URL + "/api/auth/signin", {
                email, 
                password
            });

            const {token} =res.data;

            localStorage.setItem("token", token);
            await verifyToken();
            navigate("/dashboard");
            console.log("sign in done");

        }catch(err){
            if(err.response && err.response.data && err.response.data.error){
                setErrorMsg(err.response.data.error);
            }else{
                console.log(err);
                setErrorMsg("Something went wrong. Please try again.");
            }
            console.log("sign in error");
        }
    }

    return (
        <div className="min-h-[calc(100vh-7vh)] flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md border border-gray-400 rounded-xl shadow-md p-8">
                <p className="text-center"><Logo size='2'/></p>
                <p className="text-center text-gray-600 mb-6">Sign in to your account</p>
                {successMsg && (
                    <div className="bg-green-100 text-green-700 border border-green-300 p-2 rounded-md text-sm mb-4">
                        {successMsg}
                    </div>
                )}
                {errorMsg && (
                    <div className="bg-red-100 text-red-700 border border-red-300 p-2 rounded-md text-sm mb-4">
                        {errorMsg}
                    </div>
                )}
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                        type="email"
                        required
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        placeholder="you@example.com"
                        className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input 
                        type="password"
                        required
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder="********"
                        className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 py-2 text-white rounded-lg hover:bg-blue-700 transition duration-200">LogIn</button>
                </form>
                <div className="text-sm mt-4 flex justify-between text-gray-600">
                    <Link className="hover:text-blue-600">Forget password</Link>
                    <Link to='/signup' className="hover:text-blue-600">Don't have an account</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;