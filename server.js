const express = require('express');
const app = express();

app.use(express.json());

// === EXAMPLE === 
//      for when we start task 7

// Import routes at top
// const carValueRoute = require('./api1/carValueRoute');

// Add Route
// app.use('/api1', carValueRoute);
// ===============

const carValueRoute = require('./api1/carValueRoute');
app.use('/api1', carValueRoute);

app.listen(3000, () => console.log('Server running on port 3000'));