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