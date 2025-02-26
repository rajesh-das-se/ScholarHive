import logo from './../assets/logo-removebg-preview.png'
import { useNavigate } from 'react-router-dom'
const LandingPage= ()=>{
    
    const navigate=useNavigate();

    const goToScholarships=()=>{
        return navigate('/scholarships')
    }

    return (
        <>
        <header className='text-center py-20'>
            <h1 className='text-4xl font-bold text-gray-800'>Find the Best Scholarship for You</h1>
            <p className='text-lg text-gray-600 mt-4'>Explore verified public and private scholarships across India that align with your academic and financial needs.</p>
            <button onClick={goToScholarships} className='mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700'>Explore Scholarships</button>
        </header>
        </>
    )
}

export default LandingPage