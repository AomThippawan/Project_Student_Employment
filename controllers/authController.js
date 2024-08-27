const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

//register
exports.register = async (req,res) => {
    const { 
    First_Name  ,
    Last_Name   ,
    Email       ,
    Username    ,
    Phone       ,
    Password    ,
    Institude   ,
    Faculty     ,
    Program     ,
    Profile     } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(Password,10);
        const user = new User ({
            First_Name  ,
            Last_Name   ,
            Email       ,
            Username    ,
            Phone       ,
            Password: hashedPassword    ,
            Institude   ,
            Faculty     ,
            Program     ,
            Profile});
        await user.save();
        res.status(200).send('User registered !');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//login
exports.login = async (req, res) => {
    const { Username  , Password } = req.body;
    try {
        const user = await User.findOne({ Username });
        if (!user) return res.status(400).send("User not found");
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) return res.status(400).send("Invalid credentials");

        const accessToken = jwt.sign(
            { userId: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "10m" }
        );

        const refreshToken = jwt.sign(
            { userId: user._id },
            process.env.REFRESH_TOKEN_SECRET
        );
        res.json({ user, accessToken, refreshToken });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

//refresh
exports.refresh = async (req, res) => {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign(
            { userId: user.userId },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "20m" }
        );
        res.json({ accessToken });
    });
};
