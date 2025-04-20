import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from './../models/user.model.js'

const signup = async (req, res) => {
    try {
        const { fullname, email, password, confirmPassword } = req.body;
        if (!fullname || !email || !password || !confirmPassword) {
            return res.status(400).send({ error: "All fields are required." });
        } else if (password !== confirmPassword) {
            return res.status(400).send({ error: "Passwords do not match." });
        } else if (await User.findOne({ email: email })) {
            console.log(email)
            return res.status(409).send({ error: "Email already in use." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ fullname, email, password: hashedPassword });
        res.status(201).send({
            message: "User created successfully",
            user: {
                id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email
            }
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: "Server error. Please try again later" });
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password, process.env.JWT_SECRET);
        if (!email || !password) {
            return res.status(400).send({ error: "Email and password are required." });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ error: "User not found." });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).send({ error: "Incorrect password." });
        }
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        res.status(200).send({
            message: "successfully signed in",
            token,
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ error: "Server error. Please try again later." })
    }
}

const verify = async (req, res) => {
    try {
        res.status(200).send({
            message: "Token is valid",
            user: req.user
        });
    } catch (err) {
        res.status(500).send({ error: "" });
    }
}

export { signup, signin, verify };