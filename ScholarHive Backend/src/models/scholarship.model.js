import mongoose from "mongoose";

const scholarshipSchema= new mongoose.Schema({
    name: {type: String, require: true},
    description: String,
    category: String,
    level: String,
    institute: String,
    ministry: {type: String, require: true},
    officialWebsite: {type: String, require: true},
    pdfLink: String,
    selectionProcess: String,
    eligibility :{
        academicCriteria: String,
        incomeCriteria: String,
        categoryCriteria: String,
        gender: {type: String, enum: ["Male", "Female", "Trans", "ALL"], default: "All"},
        ageLimit: String,
    },
    applicationDetails: {
        startDate: String,
        endDate: String,
        status: {type: Boolean, require: true},
        applyLink: {type: String},
        applicationFee: {type: Number, default: 0},
    },
    benefits: {
        amount: String,
        duration: String,
        renewable: String,
        benefits: String,
    },
});

const Scholarship= mongoose.model("Scholarship", scholarshipSchema);

export default Scholarship;
  