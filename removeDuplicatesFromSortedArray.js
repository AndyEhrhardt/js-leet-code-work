// FIRST SOLVE
// Time Complexity: O(n), Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // pointer
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        // if the current number doesn't match the last unique element
        if (nums[j] !== nums[i]) {
            // move pointer forwards 
            i++;
            // set last unique element equal to current number
            nums[i] = nums[j];
        }
    }
    // return unique element count plus one
    return i + 1;
};