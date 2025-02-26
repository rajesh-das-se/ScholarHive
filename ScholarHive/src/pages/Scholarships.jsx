import ScholarshipCard from "../components/ScholarshipCard";

const Scholarships = () => {
    const scholarships = [
        { name: "National Merit Scholarship", category: "Merit-based", department: "General", eligibility: "Class 12 pass with 80%+ marks", deadline: "March 31, 2025" },
        { name: "State Government Scholarship", category: "Need-based", department: "State Education", eligibility: "Resident of the state, Family income below 3 LPA", deadline: "April 15, 2025" },
        { name: "Private Foundation Grant", category: "Private", department: "Corporate Sponsorships", eligibility: "Undergraduate students with 70%+ marks", deadline: "May 10, 2025" },
    ];
    return (
        <>
            <div className="bg-white text-gray-900">
                <h1 className="text-2xl font-bold text-blue-600 text-center my-6">Available Scholarships</h1>
                <div className="max-w-4xl mx-auto p-4 flex justify-center space-x-4">
                    <input 
                    type="text" 
                    placeholder="Search by name"
                    className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></input>
                    <select className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        {scholarships.map((scholarship)=>{
                            return <option>{scholarship.category}</option>
                        })}
                    </select>
                    <select className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    {scholarships.map((scholarship)=>{
                            return <option>{scholarship.department}</option>
                        })}
                    </select>
                </div>
                <div className="max-w-4xl mx-auto p-8">
                    {scholarships.map((scholarship, index)=>{
                        return <ScholarshipCard scholarship={scholarship} key={index}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default Scholarships