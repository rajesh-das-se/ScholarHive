import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar= ()=>{
    return (
        <nav className='navbar-container'>
            <ul>
                <li><Link to='/' className='navbar-link'>Home</Link></li>
                <li><Link to='/scholarships' className='navbar-link'>Scholarships</Link></li>
                <li><Link to='./about' className='navbar-link'>About</Link></li>
                <li><Link to='./contact' className='navbar-link'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar