import pdfExtractor from 'pdf-extraction';
import axios from 'axios';

// Function to extract text from PDF
async function extractTextFromPDF(pdfURL) {
    try{
        const dataBuffer = await axios.get(pdfURL, {responseType: "arraybuffer"});
        const data= await pdfExtractor(dataBuffer.data);
        return data.text;
    }catch(err){
        console.log(`Unable to extarct text from the PDF having URL: ${pdfURL}`);
        console.log(err);
    }
}

export default extractTextFromPDF;