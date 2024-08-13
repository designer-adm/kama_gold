const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a Schema and Model
const formSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
});

const Form = mongoose.model('Form', formSchema);

// Define Routes
app.post('/submit-form', async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const newForm = new Form({ name, phone, address });
    await newForm.save();
    res.status(200).send('Form data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving form data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
