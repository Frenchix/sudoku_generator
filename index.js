require('dotenv').config();
const cors = require('cors');
const express = require('express');
const router = require('./app/router');

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
