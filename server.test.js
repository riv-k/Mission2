const express = require('express');
const claimHistoryRouter = require('./api2/claimHistoryRoute');
const request = require('supertest');
const { describe, test, expect } = require('@jest/globals');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/claim-history', claimHistoryRouter);

describe('API.2 - Claim History', () => {
    test("Responds with 200 Status Code", async () => {
        const res = await request(app).get('/claim-history');
        expect(res.status).toEqual(200);
    })
})