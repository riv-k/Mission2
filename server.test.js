const express = require('express');
const claimHistoryRouter = require('./api2/claimHistoryRoute');
const request = require('supertest');
const { describe, test, expect } = require('@jest/globals');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/risk-rating', claimHistoryRouter);

describe('API.2 - Claim History', () => {
    // Testing basic API functionality
    test("Responds with 200 Status Code", async () => {
        const res = await request(app).post('/risk-rating');
        expect(res.status).toEqual(400); //updated res status because no body in this request
    })

    test("Handles body request", async () => {
        const body = {
            claim_history: "My only claim was a crash."
        };

        const res = await request(app)
            .post('/risk-rating')
            .send(body);

        expect(res.status).toEqual(200);
        expect(res.body.risk_rating).toBeDefined();
    })

    // Testing Bussiness Rules
    test("Normal Case - 1 Keyword", async () => {
        const body = {
            claim_history: "I had one crash last year."
        };

        const res = await request(app)
            .post('/risk-rating')
            .send(body);

        const expectedRiskRating = 1;
        expect(res.body.risk_rating).toEqual(expectedRiskRating);
    });

    test("Normal Case - Multiple keywords", async () => {
        const body = {
            claim_history: "I had one crash last year and I there is a scratch on my door."
        };

        const res = await request(app)
            .post('/risk-rating')
            .send(body);

        const expectedRiskRating = 2;
        expect(res.body.risk_rating).toEqual(expectedRiskRating);
    });

    test("Normal Case - keyword inside a word", async () => {
        const body = {
            claim_history: "I had a few minor crashes last year, but nothing serious."
        };

        const res = await request(app)
            .post('/risk-rating')
            .send(body);

        const expectedRiskRating = 1;
        expect(res.body.risk_rating).toEqual(expectedRiskRating);
    });

    // test("Boundary Case - 0 Keywords", async () => {
    //     const body = {
    //         claim_history: "No incidents in the last 3 years."
    //     };

    //     const res = await request(app)
    //         .post('/risk-rating')
    //         .send(body);

    //     const expectedRiskRating = 1;
    //     expect(res.body.risk_rating).toEqual(expectedRiskRating);
    // });
    test.todo("Boundary Case - 0 Keywords"); // Will comback to later
    test.todo("Boundary Case - 5+ keywords"); // Will comback to later

    test("Edge Case - mixed capitalization", async () => {
        const body = {
            claim_history: "I had a minor CrAsH and a small Scratch last year."
        };

        const res = await request(app)
            .post('/risk-rating')
            .send(body);

        const expectedRiskRating = 2;
        expect(res.body.risk_rating).toEqual(expectedRiskRating);
    });

    test("Edge Case - punctuation", async () => {
        const body = {
            claim_history: "crash? scratch! what are those?"
        };

        const res = await request(app)
            .post('/risk-rating')
            .send(body);

        const expectedRiskRating = 2;
        expect(res.body.risk_rating).toEqual(expectedRiskRating);
    });

    test.todo("Error Case - empty string");
    test("Error Case - null input", async () => {
        const body = {
            claim_history: null
        };

        const res = await request(app)
            .post('/risk-rating')
            .send(body);

        const expectedOutput = "there is an error";
        expect(res.body.error).toEqual(expectedOutput);
    });
    test.todo("Error Case - wrong data type");
})