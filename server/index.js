const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const router = require('./routes.js');

const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});