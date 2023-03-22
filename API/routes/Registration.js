const express = require('express');
const Registrations = require('../models/Registrations');
const router = express.Router();

// Route to handle POST request to create a new registration document in the database
router.post("/registrations", async(req,res)=>{
    try{
        const {firstName, lastName, email, password} = req.body;
        
        // Create a new registration document using the Registration model
        const registration = new Registrations({
            firstName,
            lastName,
            email,
            password
        });

        // Save the new registration document to the database
        const saveRegistration = await registration.save();

        // Respond with the saved registration document as JSON
        res.json(saveRegistration);
    } catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
});


// Route to handle POST request to authenticate a user
router.post('/authentication', async(req,res)=>{
    try{
        const{email, password} = req.body;

        // Find the user with the specified email and password
        const user = await Registrations.findOne({email,password});

        // If the user is not found, respond with an error message
        if(!user){
            return res.status(401).json({msg: 'Invalid credentials'});
        }

        // If the user is found, respond with a success message
        res.json({msg:'Successfully Authenticated'});
    } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
    }
});

module.exports = router;