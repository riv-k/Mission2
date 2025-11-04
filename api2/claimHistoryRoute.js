const express = require('express');
const router = express.Router();

const { wordContainsKeyword } = require('./claimHistoryHelper');


router.post('/', (req, res) => {
    const { claim_history } = req.body || {};

    if (!claim_history) {
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

    res.status(200).json({ risk_rating: count });
});

module.exports = router;
