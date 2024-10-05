const express = require('express');
const router = express.Router();
const UserModel = require('../models/user.js');



router.post('/users', async function(req,res) {
    console.log(req.body);

    const user = new UserModel(req.body);
    await user.save();
})

routes.get('/users', async function (req , res) {
    const users = await UserModel.find();

    res.status(200).send(users);
});