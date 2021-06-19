require('dotenv').config();

const express = require('express');
const router = express.Router();
const axios = require('axios');

const API_URL = `https://superheroapi.com/api/${process.env.REACT_APP_API_KEY}`;

router.get('/:id', (req, res) => {
  axios.get(`${API_URL}/${req.params.id}`).then((heroes) => {
    res.json(heroes.data);
  });
});

module.exports = router;
