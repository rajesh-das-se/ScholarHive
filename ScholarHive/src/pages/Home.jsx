import ScholarshipButton from '../components/ScholarshipButton';

const LandingPage= ()=>{

    return (
        <>
        <header className='text-center py-20'>
            <h1 className='text-4xl font-bold text-gray-800'>Find the Best Scholarship for You</h1>
            <p className='text-lg text-gray-600 mt-4'>Explore verified public and private scholarships across India that align with your academic and financial needs.</p>
            <ScholarshipButton/>
        </header>
        </>
    )
}

export default LandingPage