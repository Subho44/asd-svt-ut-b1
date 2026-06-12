const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

//add course

router.post('/', async (req, res) => {
    const course = await Course.create(req.body);
    res.status(201).json({ message: "course added sucessfully", course });
});

//view all course
router.get('/', async (req, res) => {
    const course = await Course.find();
    res.status(201).json( course );
});

//singel view
router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.status(201).json( course );
});

//update

router.put('/:id', async (req, res) => {
    const course = await Course.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(201).json( course );
});

//delete

router.delete('/:id', async (req, res) => {
    await Course.findByIdAndDelete(
        req.params.id,
    );
    res.status(201).json( {message:"course deleted successfully"} );
});

module.exports = router;