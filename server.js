require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 1897;
const DB_URI = process.env.MONGO_URI;
const DB_NAME = 'ujianDB';

app.use(cors());
app.use(bodyParser.json());

let collection;

// Pastikan koneksi MongoDB hanya dilakukan sekali dan aman
MongoClient.connect(DB_URI, { useUnifiedTopology: true })
  .then(client => {
    console.log('✅ Terhubung ke MongoDB');
    const db = client.db(DB_NAME);
    collection = db.collection('jawaban');

    // Mulai server hanya setelah DB siap
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Gagal konek MongoDB:', err.message);
    process.exit(1); // Hentikan server jika gagal konek
  });

app.post('/hasil', async (req, res) => {
  try {
    const data = req.body;
    if (!collection) throw new Error('Database belum siap');
    await collection.insertOne(data);
    res.json({ status: 'success' });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

app.get('/admin/jawaban', async (req, res) => {
  try {
    if (!collection) throw new Error('Database belum siap');
    const result = await collection.find({}).toArray();
    res.json(result);
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});
