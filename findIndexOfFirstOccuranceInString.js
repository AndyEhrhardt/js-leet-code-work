/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // Edge case: empty needle returns 0 by definition
    if (needle === "") return 0;

    // Loop through haystack up to the point where needle can still fit
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check if substring matches needle
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    // If no match found, return -1
    return -1;
};
