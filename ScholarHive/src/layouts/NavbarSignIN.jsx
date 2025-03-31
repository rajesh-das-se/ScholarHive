import { Link } from 'react-router-dom';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

const NavbarSignIn = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-white text-gray-900 shadow-md sticky top-0'>
            <div className='max-w-6xl mx-auto flex space-x-2 sm:space-x-6 justify-between items-center p-4'>

                {/* Mobile Menu Button */}
                <Menu className='sm:hidden' onClick={() => setIsOpen(!isOpen)} />

                {/* Logo */}
                <div className='text-xl font-bold text-blue-600'>ScholarHive</div>

                {/* Desktop Navigation Links */}
                <div className='hidden sm:flex sm:flex-1 sm:justify-center sm:space-x-6'>
                    <Link to='/' className='hover:text-blue-600'>Home</Link>
                    <Link to='/scholarships' className='hover:text-blue-600'>Scholarships</Link>
                    <Link to='/about' className='hover:text-blue-600'>About</Link>
                    <Link to='/contact' className='hover:text-blue-600'>Contact</Link>
                </div>

                {/* Search Bar */}
                <input 
                    type='text' 
                    placeholder='Search..' 
                    className='hidden sm:block border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
                />

                {/* Sign In & Sign Up Buttons (Desktop) */}
                <div className='hidden sm:flex items-center space-x-4'>
                    <Link to='/signin' className='text-blue-600 font-medium hover:text-blue-800'>Sign In</Link>
                    <Link to='/signup' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                        Sign Up
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className='sm:hidden fixed inset-0 bg-white w-3/4 h-full shadow-lg rounded-lg flex flex-col space-y-4 p-6'>
                    <X className='cursor-pointer self-end' onClick={() => setIsOpen(!isOpen)} />
                    <input 
                        type='text' 
                        placeholder='Search..' 
                        className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
                    />
                    <Link to='/' className='hover:text-blue-600' onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to='/scholarships' className='hover:text-blue-600' onClick={() => setIsOpen(false)}>Scholarships</Link>
                    <Link to='/about' className='hover:text-blue-600' onClick={() => setIsOpen(false)}>About</Link>
                    <Link to='/contact' className='hover:text-blue-600' onClick={() => setIsOpen(false)}>Contact</Link>

                    {/* Sign In & Sign Up Buttons (Mobile) */}
                    <Link to='/signin' className='text-blue-600 font-medium hover:text-blue-800' onClick={() => setIsOpen(false)}>Sign In</Link>
                    <Link 
                        to='/signup' 
                        className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center'
                        onClick={() => setIsOpen(false)}
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavbarSignIn;
