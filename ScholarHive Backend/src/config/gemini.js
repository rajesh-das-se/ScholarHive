import { GoogleGenerativeAI } from "@google/generative-ai";

const configGemini= ()=>{
    try{
        const genAI= new GoogleGenerativeAI(process.env.GeminiApiKey);
        return  genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    }catch(err){
        console.log("Unable to connect to Gemini, Error: ", err);
    }
}

export default configGemini;