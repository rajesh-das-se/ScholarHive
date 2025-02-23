

const dateExtractor= (str)=>{
    const datePattern = /\b\d{2}[-\/]\d{2}[-\/]\d{4}\b/;  // Matches DD-MM-YYYY or DD/MM/YYYY
    const match = str.match(datePattern);
    return match? new Date(match[0]): null;
}

export default dateExtractor;
