const express = require('express');
const router = express.Router();
const getCarValue = require('./carValue'); 

router.post('/value', (req, res) => {
  const result = getCarValue(req.body);
  res.json(result);
});

module.exports = router;
