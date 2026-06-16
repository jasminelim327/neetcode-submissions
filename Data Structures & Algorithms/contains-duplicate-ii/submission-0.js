class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */

    containsNearbyDuplicate(nums, k) {
        //  hv to do up  matches to see 
        let numDict = new Map()
        
        for (let i = 0; i < nums.length; i++){
           
            if (numDict[nums[i]] != undefined && i - numDict[nums[i]] <= k){
                return true; 
            }
            console.log(numDict[nums[i]], i )
            numDict[nums[i]] = i //its already end of the thing 
        }
        return false
    }   
}
