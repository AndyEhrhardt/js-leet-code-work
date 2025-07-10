/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const wordArray = s.split(" ");
    for (let i = wordArray.length - 1; i >= 0; i--) {
        // to account for cases of multiple spaces in a row
        if(wordArray[i] !== ''){
            return wordArray[i].length
        }
    }
};