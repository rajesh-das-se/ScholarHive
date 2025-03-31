import { Link } from 'react-router-dom'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import NavigationButton from './../components/NavigationButton'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='bg-white text-gray-900 shadow-md sticky top-0'>
            <div className='max-w-6xl mx-auto flex space-x-2 md:space-x-4 justify-between items-center p-3'>

                {/* Mobile Menu Button */}
                <Menu className='md:hidden' onClick={() => { setIsOpen(!isOpen) }} />

                {/* Logo  */}
                <Link to='/' className='text-xl font-bold text-blue-600'>ScholarHive</Link>

                {/* Desktop  Navigation Links*/}
                <div className='hidden md:flex md:flex-1 md:justify-center md:space-x-3'>
                    <Link to='/' className='hover:text-blue-600'>Home</Link>
                    <Link to='/scholarships' className='hover:text-blue-600'>Scholarships</Link>
                    <Link to='/about' className='hover:text-blue-600'>About</Link>
                    <Link to='/contact' className='hover:text-blue-600'>Contact</Link>
                </div>

                {/* Desktop  Search bar & sign in, sign up buttons */}
                <div className='hidden md:flex items-center space-x-2'>
                    <input type='text' placeholder='Search..' className='border rounded-lg h-8 w-40 px-2 py-1 focus:outline-none  focus:ring-2 focus:ring-blue-600'></input>
                    <Link to='/signin' className='bg-blue-600 px-3.5 py-1 rounded-sm text-white font-semibold shadow-md hover:bg-blue-700'>SignIn</Link>
                    <Link to='/signup' className='bg-blue-600 px-3.5 py-1 rounded-sm text-white font-semibold shadow-md hover:bg-blue-700'>SignUp</Link>
                </div>

            </div>
            {/* Mobile  Navigation Links*/}
            {isOpen && (
                <div className='md:hidden fixed inset-0 bg-white w-3/4 h-full shadow-lg rounded-lg flex flex-col space-y-4 p-6'>
                    <X className='cursor-pointer self-end' onClick={() => { setIsOpen(!isOpen) }} />
                    <input type='text' placeholder='Search..' className='border rounded-lg px-4 py-2 focus:outline-none  focus:ring-2 focus:ring-blue-600'></input>
                    <Link to='/' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>Home</Link>
                    <Link to='/scholarships' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>Scholarships</Link>
                    <Link to='/about' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>About</Link>
                    <Link to='/contact' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>Contact</Link>
                    <Link to="/signin" className="bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700 text-center" onClick={() => setIsOpen(false)}>Sign In</Link>
                    <Link to="/signup" className="bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700 text-center" onClick={() => setIsOpen(false)}>Sign Up</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar