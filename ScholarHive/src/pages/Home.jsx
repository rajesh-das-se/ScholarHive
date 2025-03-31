import NavigationButton from '../components/NavigationButton';

const LandingPage= ()=>{

    return (
        <>
        <header className='text-center py-20'>
            <h1 className='text-4xl font-bold text-gray-800'>Find the Best Scholarship for You</h1>
            <p className='text-lg text-gray-600 mt-4 mb-6'>Explore verified public and private scholarships across India that align with your academic and financial needs.</p>
            <NavigationButton buttonText='Explore Scholarships' destinationPage='/scholarships' width={6} height={3}/>
        </header>
        </>
    )
}

export default LandingPage