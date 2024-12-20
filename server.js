const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock database (in-memory array)
const clients = [];

// Add a new client (Controller + Model)
app.post('/clients', (req, res) => {
  const client = req.body;
  clients.push(client);
  res.status(201).json({ message: 'Client added successfully!' });
});

// Search for a client by email (Controller + Model)
app.get('/clients', (req, res) => {
  const { email } = req.query;
  const client = clients.find(c => c.email === email);

  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ message: 'Client not found!' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
