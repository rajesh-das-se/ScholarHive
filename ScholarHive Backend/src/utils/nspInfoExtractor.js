import configGemini from '../config/gemini.js';
import extractTextFromPDF from './pdfTextExtractor.js';


const genAIModel= configGemini();

// const jsonFormat={
//     name: String,
//     description: String,
//     category: String,
//     level: String,
//     institute: String,
//     ministry: String,
//     academicCriteria: String,
//     incomeCriteria: String,
//     categoryCriteria: String,
//     gender: String,
//     ageLimit: Number,
//     startDate: Date,
//     endDate: Date,
//     applicationFee: Number,
//     amount: Number,
//     duration: String,
//     renewable: Boolean,
//     benefits: String,
//     selectionProcess: String,
//     examRequired: Boolean,
//     interviewRequired: Boolean,
// }


// Function to process extracted text using Gemini API
async function getScholarshipDetails(pdfText, scholarshipName, parameter) {
    try{
        const prompt = ` 
        what is the ${parameter} for ${scholarshipName} from the given PDF content.
        please do not include extra text. I need extact answer in short.
        
        PDF Content:
        """${pdfText}"""
        `;
        
        const response = await genAIModel.generateContent(prompt);
        console.log(response.response.text());
    }catch(err){
        console.log(`Unable to produce ${parameter} parameter value for ${scholarshipName}`);
        console.log(err);
    }
}

getScholarshipDetails("https://scholarships.gov.in/public/schemeGuidelines/DEPDGuidelines_1.pdf", "Scholarship For Top Class Education For Students With Disabilities", "age limit");

// Run the pipeline
async function extractNspDetails(pdfUrl, scholarshipName) {
    try{
        const pdfText= await extractTextFromPDF(pdfUrl);
        const description = await getScholarshipDetails(pdfText, scholarshipName, "description");
        const selectionProcess = await getScholarshipDetails(pdfText, scholarshipName, "Selection Process");
        const academicCriteria = await getScholarshipDetails(pdfText, scholarshipName, "Academic Criteria");
        const incomeCriteria = await getScholarshipDetails(pdfText, scholarshipName, "Income Criteria");
        const categoryCriteria = await getScholarshipDetails(pdfText, scholarshipName, "Category Criteria");
        const ageLimit = await getScholarshipDetails(pdfText, scholarshipName, "age limit");

        return {description, selectionProcess, academicCriteria, incomeCriteria, categoryCriteria, ageLimit};
        
    }catch(err){
        console.log(`Unable to extract parameters details for ${scholarshipName}`);
        console.log(err);
    }
}

export default extractNspDetails;
