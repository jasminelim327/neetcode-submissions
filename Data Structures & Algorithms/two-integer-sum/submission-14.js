class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        var countIndex = {}

        for ( let i = 0; i < nums.length ; i ++){
           let curr =  nums[i]
           let complement = target - curr

           if ( countIndex[complement] !== undefined){
             return [ countIndex[complement], i]
           }
           countIndex[curr] = i 
        }
        
    }
       
}

