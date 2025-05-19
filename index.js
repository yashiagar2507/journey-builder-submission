const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

app.get('/action-blueprint-graph-get', (req, res) => {
  const graphPath = path.join(__dirname, 'graph.json');
  fs.readFile(graphPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to load graph.json' });
    } else {
      try {
        const json = JSON.parse(data);
        res.json(json);
      } catch (e) {
        res.status(500).json({ error: 'Invalid JSON format in graph.json' });
      }
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`✅ Mock Server running at http://localhost:${port}`);
});
