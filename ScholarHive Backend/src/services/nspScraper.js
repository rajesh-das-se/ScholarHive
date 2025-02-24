import puppeteer from 'puppeteer';
import Scholarship from '../models/Scholarship.js';
import connectDB from '../config/db.js';
import extractNspDetails from '../utils/nspInfoExtractor.js'

await connectDB();

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://scholarships.gov.in/All-Scholarships", { waitUntil: 'load', timeout: 60000 });

const scholarships = await page.evaluate(() => {
    const data = [];
    document.querySelectorAll('.accordion-item').forEach(item => {
        const ministry = item.querySelector('.accordion-button')?.innerText.trim() || 'N/A';

        item.querySelectorAll('.row.mb-4.border-1.border-bottom').forEach(scholarship => {
            const name = scholarship.querySelector('h6')?.innerText.trim() || 'N/A';
            const dateStr = scholarship.querySelectorAll('span')[0]?.innerText;
            const datePattern = /\b\d{2}[-\/]\d{2}[-\/]\d{4}\b/;  // Matches DD-MM-YYYY or DD/MM/YYYY
            const dateInfo = dateStr.match(datePattern);

            let startDate = null; //Right now there is no start date in NSP
            let endDate = null;
            let status = false;
            // let currentDate = new Date();

            if (dateInfo) {
                const [day, month, year] = dateInfo[0].split(/[-\/]/);
                const parseDate = new Date(`${year}-${month}-${day}`);

                endDate = parseDate.toDateString();
                if (dateStr.includes("open")) status = true;
            }

            const pdfLink = scholarship.querySelectorAll('a')[0]?.href;
            data.push({
                name,
                description: "NA",
                ministry,
                officialWebsite: "https://scholarships.gov.in/",
                pdfLink,
                selectionProcess: "NA",
                eligibility: {
                    academicCriteria: "NA",
                    incomeCriteria: "NA",
                    categoryCriteria: "NA",
                    gender: "ALL",
                    ageLimit: "NA",
                },
                applicationDetails: {
                    startDate,
                    endDate,
                    status,
                    applyLink: "https://scholarships.gov.in/ApplicationForm/",
                    applicationFee: 0,
                },
                benefits: {
                    amount: "NA",
                    duration: "NA",
                    renewable: "NA",
                    benefits: "NA",
                },
            });
        });
    });
    return data;
});

const processScholarShip = async () => {
    for (const scholarship of scholarships) {
        try {
            const nspDetails = await extractNspDetails(scholarship.pdfLink, scholarship.name);

            scholarship.description = nspDetails.description;
            scholarship.selectionProcess = nspDetails.selectionProcess;
            scholarship.eligibility.academicCriteria = nspDetails.academicCriteria;
            scholarship.eligibility.incomeCriteria = nspDetails.incomeCriteria;
            scholarship.eligibility.categoryCriteria = nspDetails.categoryCriteria;
            scholarship.eligibility.ageLimit = nspDetails.ageLimit;

            await Scholarship.updateOne(
                { name: scholarship.name },
                { $set: scholarship },
                { upsert: true }
            );

            console.log("Saved...");
        } catch (err) {
            console.log("Failed to save NSP scholarship data to Mongo DB!");
            console.log("error: ", err);
        }
        await delay(60000);
    }
}

processScholarShip()