import { useNavigate } from 'react-router-dom'

const ScholarshipButton = ()=>{

    const navigate=useNavigate();
    
    const goToScholarships=()=>{
        return navigate('/scholarships')
    }

    return (
        <>
            <button onClick={goToScholarships} className='mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700'>Explore Scholarships</button>
        </>
    )
}

export default ScholarshipButton;