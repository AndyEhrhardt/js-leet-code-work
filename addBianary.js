/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];

    // Loop while there are still digits in a or b, or there's a carry left
    while (i >= 0 || j >= 0 || carry !== 0) {
        const bitA = i >= 0 ? parseInt(a[i]) : 0;
        const bitB = j >= 0 ? parseInt(b[j]) : 0;

        const sum = bitA + bitB + carry;

        // Append the current bit to result (sum % 2)
        result.push((sum % 2).toString());

        // Calculate new carry
        carry = Math.floor(sum / 2);

        // Move to next digits
        i--;
        j--;
    }

    // The result is built backwards, so reverse it
    return result.reverse().join('');
};