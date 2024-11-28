const express = require('express');
const bodyParser = require('body-parser');

const postRoutes = require('./routes/posts');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
