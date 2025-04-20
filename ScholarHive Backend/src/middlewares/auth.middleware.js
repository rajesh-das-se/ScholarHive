import jwt from "jsonwebtoken"

const verifyJWT = async (req, res, next)=>{
    const authHeader= req.headers["authorization"];
    const token= authHeader && authHeader.split(" ")[1];

    console.log("I am here");
    if(!token){
        return resizeBy.status(401).send({error: "Access token missing."});
    }

    try{
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        res.status(403).send({error: "Invalid or expired token"});
    }
}

export default verifyJWT;