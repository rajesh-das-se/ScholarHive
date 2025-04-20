import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../components/Logo'
import { X, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='bg-white text-gray-900 sticky top-0 h-[7vh]'>
            <div className='mx-auto px-6 md:px-16 py-3 flex justify-between items-center'>
                {/* Left  */}
                <div className='flex items-center space-x-4'>
                    {/* Mobile Menu Button */}
                    <Menu
                        className='lg:hidden w-6 h-6 cursor-pointer'
                        onClick={() => { setIsOpen(!isOpen) }}
                    />
                    <Logo size='3' />
                </div>

                {/* Center: Desktop  Navigation Links*/}
                <div className='hidden lg:flex items-center space-x-8 text-[16px] font-medium text-gray-800'>
                    <Link to='/' className="hover:text-blue-600 transitio">Home</Link>
                    <Link to='/scholarships' className='hover:text-blue-600 transition'>Scholarships</Link>
                    <Link to='/about' className='hover:text-blue-600 transition'>About</Link>
                    <Link to='/contact' className='hover:text-blue-600 transition'>Contact</Link>
                </div>

                {/* Right: Desktop  Search bar & sign in, sign up buttons */}
                <div className='hidden lg:flex items-center space-x-4'>
                    <input type='text' placeholder='Search' className='h-7.5 w-40 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600'></input>
                    <Link to='/signin' className='px-4 py-1 text-sm font-semibold text-white border border-blue-600 bg-blue-600 rounded hover:bg-blue-700 transition shadow-sm'>Sign In</Link>
                    <Link to='/signup' className='px-4 py-1 text-sm font-semibold text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition shadow-sm'>Sign Up</Link>
                </div>


            </div>
            {/* Mobile  Navigation Links*/}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`lg:hidden fixed inset-0 bg-white w-3/4 h-full shadow-lg flex flex-col space-y-5 p-6 z-50`}
                    >
                        <X className='cursor-pointer self-end' onClick={() => { setIsOpen(!isOpen) }} />
                        <input type='text' placeholder='Search' className='border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600'></input>
                        <Link to='/' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>Home</Link>
                        <Link to='/scholarships' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>Scholarships</Link>
                        <Link to='/about' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>About</Link>
                        <Link to='/contact' className='hover:text-blue-600' onClick={() => { setIsOpen(!isOpen) }}>Contact</Link>
                        <Link to="/signin" className="border border-blue-600 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 text-center" onClick={() => setIsOpen(false)}>Sign In</Link>
                        <Link to="/signup" className="border border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 text-center" onClick={() => setIsOpen(false)}>Sign Up</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar