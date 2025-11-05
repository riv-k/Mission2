const express = require('express');
const router = express.Router();

const { wordContainsKeyword } = require('./claimHistoryHelper');


router.post('/', (req, res) => {
    const { claim_history } = req.body || {};

    const isNotString = typeof claim_history !== 'string';
    if (!claim_history || isNotString) {
        return res.status(400).json({ error: "there is an error" });
    }

    const keywords = ["collide", "crash", "scratch", "bump", "smash"];
    const text = claim_history.toLowerCase().split(/\s+/);

    let count = 0;
    for (let word of text) {
        word = word.replace(/[.,!?;:]/g, '');

        if (wordContainsKeyword(word, keywords)) {
            count += 1;
        }
    }

    if (count === 0) {
        count = 1;
    } else if (count > 5) {
        count = 5;
    }

    res.status(200).json({ risk_rating: count });
});

module.exports = router;
