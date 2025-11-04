const express = require('express');
const claimHistoryRouter = require('./api2/claimHistoryRoute');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/claim-history', claimHistoryRouter);

// app.listen(3000, () => console.log('Server running on port 3000'));
