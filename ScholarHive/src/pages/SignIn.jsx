import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const SignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn=(e)=>{
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <div className="min-h-[calc(100vh-7vh)] flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md border border-gray-400 rounded-xl shadow-md p-8">
                <p className="text-center"><Logo size='2'/></p>
                <p className="text-center text-gray-600 mb-6">Sign in to your account</p>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                        type="text"
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