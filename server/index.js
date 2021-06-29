//THIS SERVER WAS CREATED BECAUSE OF THE CORS PROBLEM WHICH COULDNT BE RESOLVED IN FRONT

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

//middleware
app.use(cors());

app.use('/', apiRoutes);

//PORT CONNECTION
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
