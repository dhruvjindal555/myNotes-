const express = require('express')
const router = express.Router()
const User = require('../modals/User')
const { query, validationResult } = require('express-validator');

router.post('/', [
    query('name').isLength({ min: 3 }),
    query('email').isEmail(),
    query('password').isLength({ min: 5 }),
],
    (req, res) => {
        console.log(req.body)

        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() })
        // }
        const user = User(req.body)
        user.save()

        res.send(req.body)


    })

module.exports = router 