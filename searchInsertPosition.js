// first solve need to do bianary search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i;
        } 
        if(i === 0 && target <= nums[i]){
             return i;
        }
        if(i === nums.length - 1){
            return i + 1;
        }
        if(nums[i] < target && nums[i + 1] > target){
            return i + 1;
        }
    }
};