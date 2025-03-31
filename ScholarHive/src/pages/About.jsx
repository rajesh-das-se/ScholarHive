import logo from './../assets/Logo__White.png'
import NavigationButton from '../components/NavigationButton'
const About=()=>{
    return (
        <>
            {/* Header */}
            <div className='max-w-6xl mx-auto px-6 py-16 text-gray-800'>
                <div className='text-center mb-10'>
                    {/* <img src={logo} className='text-blue-600'/> */}
                    <h1 className='text-3xl font-bold'>About ScholarHive</h1>
                    <p className='text-lg text-gray-600 mt-2'>Connecting students with the best scholarship opportunities across India.</p>
                </div>

                {/* What We Do */}
                <div className='mb-10'>
                    <h2 className='text-2xl font-semibold mb-4'>What We Do</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='border rounded-lg shadow-sm p-4 hover:shadow-md'>
                            <h3 className='text-lg font-medium'>Curated Scholarship Listings</h3>
                            <p className='text-gray-600 mt-2'>We gather and update verified public & private scholarships daily</p>
                        </div>
                        <div className='border rounded-lg shadow-sm p-4 hover:shadow-md'>
                            <h3 className='text-lg font-medium'>AI-Powered Insights</h3>
                            <p className='text-gray-600 mt-2'>Using automation, we extract scholarships details from multiple sources for easy access.</p>
                        </div>
                        <div className='border rounded-lg shadow-sm p-4 hover:shadow-md'>
                            <h3 className='text-lg font-medium'>Advanced Filtering & Search</h3>
                            <p className='text-gray-600 mt-2'>Find scholarships based on eligibility, deadlines, category etc. effortlessly.</p>
                        </div>
                        <div className='border rounded-lg shadow-sm p-4 hover:shadow-md'>
                            <h3 className='text-lg font-medium'>Daily Updates</h3>
                            <p className='text-gray-600 mt-2'>Our system keeps scholarships information up to date in realtime</p>
                        </div>
                    </div>

                </div>

                {/* Mission  */}
                <div className='text-center mb-10'>
                    <h1 className='text-2xl font-semibold mb-4'>Our Mission</h1>
                    <p className='text-gray-700 max-w-3xl mx-auto'>Our Mission is to bridge the gap between students and financial aid by simplifying the scholarship search process. We strive to make eduction accessible for all</p>
                </div>

                <div className='text-center'>
                <NavigationButton buttonText='Explore Scholarships' destinationPage='/scholarships' width={6} height={3} />
                </div>

            </div>
        </>
    )
}

export default About