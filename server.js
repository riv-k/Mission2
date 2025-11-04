const express = require('express');
const claimHistoryRouter = require('./api2/claimHistoryRoute');

const app = express();

// === EXAMPLE === 
//      for when we start task 7

// Import routes at top
// const carValueRoute = require('./api1/carValueRoute');

// Add Route
// app.use('/api1', carValueRoute);
// ===============

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/claim-history', claimHistoryRouter);

app.listen(3000, () => console.log('Server running on port 3000'));
