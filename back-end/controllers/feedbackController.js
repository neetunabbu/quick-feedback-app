const Feedback = require('../models/Feedback'); // This line is CRUCIAL

const saveFeedback = async (req, res) => {
    try {
        console.log("==== API Hit: saveFeedback ====");
        console.log("Request Body:", req.body); // Debug

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();

        res.status(201).json({ message: 'Feedback Saved Successfully!' });
    } catch (error) {
        console.error("Error in saveFeedback:", error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const getAllFeedbacks = async (req, res) => {
    try {
        console.log("==== API Hit: getAllFeedbacks ====");
        const feedbacks = await Feedback.find();
        console.log("Fetched Feedbacks:", feedbacks);
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error("Error in getAllFeedbacks:", error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { saveFeedback, getAllFeedbacks };
