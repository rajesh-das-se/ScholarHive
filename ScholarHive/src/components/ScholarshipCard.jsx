const ScholarshipCard= ({scholarship=props.scholarship ||{}})=>{
    let stausClass=scholarship.applicationDetails.status?"text-green-500":"text-red-500";
    return (
        <div className="border rounded-lg p-4 mb-2 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">{scholarship.name}</h2>
            <p className="text-gray-600"><b>Description: </b>{scholarship.description || "N/A"}</p>
            <p className="text-gray-600"><b>Ministry: </b>{scholarship.ministry || "N/A"}</p>
            <p className="text-gray-600"><b>Academic Criteria: </b>{scholarship.eligibility.academicCriteria || "N/A"}</p>
            <p className="text-gray-600"><b>Application Closing Date: </b><span className={stausClass}>{scholarship.applicationDetails.endDate || "N/A"}</span></p>
            <p className="text-gray-600"><b>Official Website: </b>{scholarship.officialWebsite || "N/A"}</p>
        </div>
    )
}



export default ScholarshipCard;