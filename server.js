const express = require('express');

// Route imports
const claimHistoryRouter = require('./api2/claimHistoryRoute');
const carValueRoute = require('./api1/carValueRoute');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json());

app.use('/risk-rating', claimHistoryRouter);
app.use('/car-value', carValueRoute);

app.listen(3000, () => console.log('Server running on port 3000'));