const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(cors());

app.use('/', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
