class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {

        //  longest increasing and longest decreasing 
        let current = 0 
        let longestLength = 1
        let length = 1
        //  strictly increasing only 
        while ( current < nums.length -1){
            if (nums[current+1] > nums[current]){
                length +=1
                longestLength = Math.max(longestLength, length)
            }
            else {
                length = 1 // reset the current one 
                longestLength = Math.max(longestLength, length)
            }
            current ++
        }
        

        let j = 0
        let decreasing = 1
        let maxDecreasingLength = 1

        while ( j < nums.length -1){
            if (nums[j+1] < nums[j]){
                decreasing +=1
                maxDecreasingLength = Math.max(decreasing, maxDecreasingLength)
            }
            else {
                decreasing = 1 // reset the current one 
                maxDecreasingLength = Math.max(decreasing, maxDecreasingLength)
            }
            j ++
        }
        // longest decreasingb

        return Math.max(maxDecreasingLength, longestLength)

    }
}
