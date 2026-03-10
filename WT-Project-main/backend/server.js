
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB
mongoose.connect('mongodb://localhost:27017/contactdata', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log('MongoDB connection error:', err));

app.use('/api/contacts', contactRoutes);

// Port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));