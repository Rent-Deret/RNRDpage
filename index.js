
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// test endpoint
app.get('/', (req, res) => {
  res.send('API Domain Reseller is live!');
});

// cek domain endpoint (contoh dummy)
app.get('/check-domain/:name', (req, res) => {
  const { name } = req.params;
  // logika pengecekan bisa ditambah
  res.json({ domain: name, available: Math.random() < 0.5 });
});

// listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
