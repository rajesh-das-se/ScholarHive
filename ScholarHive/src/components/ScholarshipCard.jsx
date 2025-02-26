const ScholarshipCard= ({scholarship=props.scholarship})=>{
    return (
        <div className="border rounded-lg p-4 mb-2 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">{scholarship.name}</h2>
            <p className="text-gray-600">{scholarship.department}</p>
            <p className="text-gray-600">{scholarship.category}</p>
            <p className="text-gray-600">{scholarship.eligibility}</p>
            <p className="text-gray-600">{scholarship.deadline}</p>
        </div>
    )
}

export default ScholarshipCard;