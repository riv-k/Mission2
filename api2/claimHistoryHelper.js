// Helper function to check if a word contains any of the specified keywords
    // eg: crashes contains 'crash' keyword -> returns true
function wordContainsKeyword(word, keywords) {
    for (const keyword of keywords) {
        if (word.includes(keyword)) {
            return true;
        }
    }
    return false;
}

module.exports = { wordContainsKeyword };
