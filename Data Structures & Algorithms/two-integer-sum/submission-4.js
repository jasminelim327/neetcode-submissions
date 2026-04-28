class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (var i= 0; i <= nums.length-1; i++){
            var n =1
            while (n <= nums.length-1){
            if (nums[i] + nums[i+n] == target){ 
                return [i, i+n]
            } n+=1
            }
    }}
    }

