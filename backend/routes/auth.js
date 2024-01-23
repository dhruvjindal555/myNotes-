const express = require('express')
const router = express.Router()
const User = require('../modals/User')
const { query, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
// require("dotenv").config()
const JWT_SECRET = process.env.JWT_SECRET
router.post('/createuser', [
    query('name').isLength({ min: 3 }),
    query('email').isEmail(),
    query('password').isLength({ min: 5 }),
], async (req, res) => {
    console.log(req.body)

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() })
    // }
    // const user = User(req.body)
    // user.save()

    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "srry user with this email already exists" })
        }
        const salt = bcrypt.genSaltSync(10);
        const secPass = bcrypt.hashSync(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken })
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Some error occured")
    }


})
//Authenticating user login 
router.post('/login', [
    query('email', "Enter a valid email").isEmail(),
    query('password', "Password cannot be empty ").exists(),
], async (req, res) => {
    console.log(req.body)

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() })
    // }
    // const user = User(req.body)
    // user.save()

    try {
        let { email, password } = req.body;

        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Enter correct credentials user not exit" })
        }

        const passwordCompare =await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(500).json({ error: "Enter correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken })
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Some error occured")
    }
})

//Getting the user details from user id
router.post('/getuser',fetchuser, async (req, res) => {
    

    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.status(200).json({user})
        
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Some error occured")
    }
})


module.exports = router 