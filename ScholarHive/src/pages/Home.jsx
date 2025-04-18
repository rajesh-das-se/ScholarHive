import { Link } from 'react-router-dom';
import { CheckCircle, GraduationCap, CalendarDays } from 'lucide-react';
import bgImg from './../assets/journey-success-through-education_643934-24172.jpg'

const LandingPage = () => {

    return (
        <>
            <main className="flex flex-col-reverse lg:flex-row justify-between items-center px-12 py-16">
                <div className="max-w-xl space-y-6">
                    <h2 className="text-5xl font-bold leading-tight text-gray-800">
                        Find the Best <br className="hidden sm:block" />
                        Scholarship for You
                    </h2>
                    <p className="text-gray-700 text-xl">
                        Explore verified public and private scholarships across India that align with your academic and financial needs.
                    </p>
                    <Link to='/scholarships' className="text-lg px-6 py-3 bg-blue-600 text-white rounded-md">Explore Scholarships</Link>
                </div>

                <div className="w-full max-w-md mb-10 lg:mb-0">
                    <img
                        src={bgImg}
                        alt="Boy Reading Book Illustration"
                        className="w-full h-auto"
                    />
                </div>
            </main>
            <section className="bg-white py-10 px-6 flex flex-col sm:flex-row justify-around items-center gap-6">
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600 w-8 h-8" />
                    <div>
                        <h4 className="font-semibold">Verified Listings</h4>
                        <p className="text-sm text-gray-600">Manually checked and updated</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <GraduationCap className="text-black w-9 h-9" />
                    <div>
                        <h4 className="font-semibold">For Every Student</h4>
                        <p className="text-sm text-gray-600">From school to higher education</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <CalendarDays className="text-black w-8 h-8" />
                    <div>
                        <h4 className="font-semibold">Regular Updates</h4>
                        <p className="text-sm text-gray-600">New opportunities added daily</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage