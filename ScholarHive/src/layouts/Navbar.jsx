import { Link } from 'react-router-dom'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='bg-white text-gray-900 shadow-md sticky top-0'>
            <div className='max-w-6xl mx-auto flex space-x-2 sm:space-x-6 justify-between items-center p-4'>

                {/* Mobile Menu Button */}
                <Menu className='sm:hidden' onClick={() => { setIsOpen(!isOpen) }} />

                {/* Logo  */}
                <div className='text-xl font-bold text-blue-600'>ScholarHive</div>

                {/* Desktop  Navigation Links*/}
                <div className='hidden sm:flex sm:flex-1 sm:justify-center sm:space-x-6'>
                    <Link to='/' className='hover:text-blue-600'>Home</Link>
                    <Link to='/scholarships' className='hover:text-blue-600'>Scholarships</Link>
                    <Link to='/about' className='hover:text-blue-600'>About</Link>
                    <Link to='/contact' className='hover:text-blue-600'>Contact</Link>
                </div>

                <input type='text' placeholder='Search..' className='hidden sm:block border rounded-lg px-4 py-2 focus:outline-none  focus:ring-2 focus:ring-blue-600'></input>

            </div>
            {/* Mobile  Navigation Links*/}
            {isOpen && (
                <div className='sm:hidden fixed inset-0 bg-white w-3/4 h-full shadow-lg rounded-lg flex flex-col space-y-4 p-6'>
                    <X className='cursor-pointer self-end' onClick={() => { setIsOpen(!isOpen) }} />
                    <input type='text' placeholder='Search..' className='border rounded-lg px-4 py-2 focus:outline-none  focus:ring-2 focus:ring-blue-600'></input>
                    <Link to='/' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>Home</Link>
                    <Link to='/scholarships' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>Scholarships</Link>
                    <Link to='/about' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>About</Link>
                    <Link to='/contact' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>Contact</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar