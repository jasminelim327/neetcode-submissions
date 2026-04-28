class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var left = 0
        var right = nums.length-1
        
        // do we need a for loop here?
        //  need to ensure that the number do not duplicate 
        while (left <right){
            if (nums[left]+nums[right] == target && nums[left] != nums[right]){
                return [left+1, right+1]
            }
            else if (nums[left] + nums[right] < target){
                if (nums[left+1] == nums[left]){
                    continue
                }
                left ++
            }
            else if (nums[left] + nums[right] > target){
                if (nums[right-1] == nums[right]){
                    continue
                }
                right --
            }
        }  
    }
}
