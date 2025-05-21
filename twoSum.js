// FIRST SOLVE
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // loop through nums
    for (let i = 0; i < nums.length; i++) { 
        // loop through nums again, for the second value to add
        for (let x = 0; x < nums.length; x++) { 
            // first check that i doesnt equal x as they need to be different indexes, then see if the result equals the target
            if(i !== x && nums[i] + nums[x] === target) { 
                // return the indexes
                return [i, x];
            }
        }
    }
};

// SECOND ATTEMPT 
// Time Complexity: O(n), Space Complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Create a hash map to store numbers we've seen and their indices
    let prevChecks = {};
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the number needed to reach the target
        let complement = target - nums[i];
        // If we've already seen that number, return the pair of indices
        if (complement in prevChecks) {
            return [prevChecks[complement], i];
        }
        // Otherwise, store the current number with its index
        prevChecks[nums[i]] = i;
    }
};