import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <div className="min-h-[calc(100vh-7vh)] flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md border border-gray-400 rounded-xl shadow-md p-8">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">ScholarHive</h1>
                <p className="text-center text-gray-600 mb-6">Create your account</p>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            placeholder="Name"
                            className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="text"
                            required
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
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
                            onChange={(e) => { setPassword(e.target.value) }}
                            placeholder="********"
                            className="w-full border px-3 py-2 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
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