const express = require('express');
const cors = require('cors');
const connectDB = require('./config'); 
const Resumedata = require('./Resume');
const Review = require('./Review');
const app = express();
const port = process.env.PORT;
connectDB();
app.use(cors());
app.use(express.json());
app.post('/Resume', async (req, res) => {
  try {
    const content = new Resumedata(req.body);
    const savedContent = await content.save();
    res.status(201).json(savedContent);
  } catch (error) {
    console.error('Error saving template content:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/Resume', async (req, res) => {
  try {
    const data = await Resumedata.findOne().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    console.error('Error fetching resume data:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/Review', async (req, res) => {
  try {
    console.log('Received review data:', req.body); 
    const review = new Review(req.body);
    const reviewData = await review.save();
    res.send(reviewData);
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/Review', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
