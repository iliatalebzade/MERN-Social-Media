import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/User.js';

dotenv.config();

export const signIn = async (req, res) => {
    // getting the email and password from request.body
    const { email, password } = req.body;

    try {
        // tring to find a user with the given credentials from the users collection
        const existingUser = await User.findOne({ email });

        // checking and returning if there are no users with the given credentials in users collection
        if (!existingUser) return res.status(404).json({ message: "user with the entered email does not exist" });

        // comparing the given password and the one within the selected user from database to see if they match
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        // checking and returning if passwords didn't match
        if (!isPasswordCorrect) return res.status(400).json({ message: "passwords don't match" });

        // creating a new token for the user
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.PRIVATE_KEY, { expiresIn: '72h' });

        // giving the client all the necessary information that they requested for
        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        // returning with a status code of 500 if something went wrong during the try phase
        res.status(500).json({ message: "something went wrong" });
    }
}

export const signUp = async (req, res) => {
    // getting the complete form data from client-side application to proceed
    const { firstName, lastName, email, password, confirmPassword, profilePicture } = req.body;

    try {
        // tring to find a user with the given credentials from the users collection
        const existingUser = await User.findOne({ email });

        // checking and returning if there is a users with the given credentials in users collection
        if (existingUser) return res.status(400).json({ message: "user with the same email exists" });

        // checking and returning if the password and it's confirmation don't match
        if (password !== confirmPassword) return res.status(400).json({ message: "password and confirm password don't match" });

        // hashing the given password
        const hashedPassword = await bcrypt.hash(password, 12);

        // creating a new user document with the given information and the hashed password
        const result = await User.create({ name: `${firstName} ${lastName}`, email, password: hashedPassword, profilePicture });

        // creating a new token for the created user
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.PRIVATE_KEY, { expiresIn: '72h' });

        // giving the client all the necessary information that they requested for
        res.status(200).json({ result, token });
    } catch (error) {
        // returning with a status code of 500 if something went wrong during the try phase
        res.status(500).json({ message: "something went wrong" });
    }
}