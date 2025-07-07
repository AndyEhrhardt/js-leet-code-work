// time complexity 0(n) 
// space complexity 0(1)
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // pointer
    let i = 0;
    // effective size of the array (counter)
    let n = nums.length;
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }
    return n;
};