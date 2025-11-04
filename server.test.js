const express = require('express');
const claimHistoryRouter = require('./api2/claimHistoryRoute');
const request = require('supertest');
const { describe, test, expect } = require('@jest/globals');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/risk-rating', claimHistoryRouter);

describe('API.2 - Claim History', () => {
    test("Responds with 200 Status Code", async () => {
        const res = await request(app).post('/risk-rating');
        expect(res.status).toEqual(200);
    })

    test.todo("Normal Case - 1 Keyword");
    test.todo("Normal Case - Multiple keywords");
    test.todo("Normal Case - keyword inside a word");

    test.todo("Boundary Case - 0 Keywords");
    test.todo("Boundary Case - 5+ keywords");

    test.todo("Edge Case - mixed capitalization");
    test.todo("Edge Case - punctuation");

    test.todo("Error Case - empty string");
    test.todo("Error Case - null input");
    test.todo("Error Case - wrong data type");
})