const express = require('express');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/', schoolRoutes);
app.get('/', (req, res) => {
  res.send('API is running!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
