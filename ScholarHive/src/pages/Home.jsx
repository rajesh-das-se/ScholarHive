import './Home.css'
import logo from './../assets/logo-removebg-preview.png'
import { useNavigate } from 'react-router-dom'
const LandingPage= ()=>{
    
    const navigate=useNavigate();

    const goToScholarships=()=>{
        return navigate('/scholarships')
    }

    return (
        <>
        <header>
            <div className='logo-container'>
                <img src={logo} alt='ScholarHive Logo' className='logo'/>
                <h1>ScholarHive</h1>
            </div>
            <p>Your Gateway to the Best Scholarships</p>
        </header>
        <div className='container'>
            <h2>Find the right Scholarship for you</h2>
            <p>Discover public and private scholarships across India that match your profile and educational goals</p>
            <a className='cta-button' onClick={goToScholarships}>Explore Scholarships</a>
        </div>
        </>
    )
}

export default LandingPage