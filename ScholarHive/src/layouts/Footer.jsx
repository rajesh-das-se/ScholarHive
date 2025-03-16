import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='bg-white text-gray-900 p-6 w-full border-t-1 border-t-gray-500'>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <div className='text-lg font-bold text-blue-600'>ScholarHive</div>
                    <div className='flex space-x-6 mt-4 md:mt-0'>
                        <Link to='/' className='hover:text-blue-600'>Home</Link>
                        <Link to='/scholarships' className='hover:text-blue-600'>Scholarships</Link>
                        <Link to='/about' className='hover:text-blue-600'>About</Link>
                        <Link to='contact' className='hover:text-blue-600'>Contact</Link>
                    </div>
                    <p className='text-sm text-gray-500 mt-4 md:mt-0'>&copy: {new Date().getFullYear()} ScholarHive. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;