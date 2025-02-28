import ScholarshipCard from "../components/ScholarshipCard";
import useFetch from "../hooks/usefetch";

const Scholarships = () => {

    const [scholarships, isLoading, error] =useFetch("http://localhost:3000/scholarships");
    
    return (
        <>
            <div className='max-w-6xl mx-auto px-6 py-8 text-gray-800'>
                <h1 className="text-3xl font-bold text-center my-6">Available Scholarships</h1>
                <div className="max-w-4xl mx-auto p-4 flex justify-center space-x-4">
                    <input 
                    type="text" 
                    placeholder="Search by name"
                    className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></input>
                    <select className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        {scholarships.map((scholarship)=>{
                            return <option key={scholarship._id}>{scholarship.category}</option>
                        })}
                    </select>
                    <select className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    {scholarships.map((scholarship)=>{
                            return <option key={scholarship._id}>{scholarship.ministry}</option>
                        })}
                    </select>
                </div>
                <div className="max-w-4xl mx-auto p-8">
                    {scholarships.map((scholarship)=>{
                        return <ScholarshipCard scholarship={scholarship} key={scholarship._id}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default Scholarships