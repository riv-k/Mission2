function wordContainsKeyword(word, keywords) {
    for (const keyword of keywords) {
        if (word.includes(keyword)) {
            return true;
        }
    }
    return false;
}

module.exports = { wordContainsKeyword };
