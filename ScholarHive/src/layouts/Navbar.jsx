import { Link } from 'react-router-dom'

const Navbar= ()=>{
    return (
        <nav className='flex justify-between items-center p-4 bg-white text-gray-900 shadow-md '>
            <div className='text-xl font-bold text-blue-600'>ScholarHive</div>
            <div className='flex flex-1 justify-center space-x-6'>
                <Link to='/' className='hover:text-blue-600'>Home</Link>
                <Link to='/scholarships' className='hover:text-blue-600'>Scholarships</Link>
                <Link to='/about' className='hover:text-blue-600'>About</Link>
                <Link to='/contact' className='hover:text-blue-600'>Contact</Link>
            </div>
            <input type='text' placeholder='Search..' className='border rounded-lg px-4 py-2 focus:outline-none  focus:ring-2 focus:ring-blue-600'></input>
            
        </nav>
    )
}

export default Navbar