class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let i = 0
        let sum = nums[0]
        let maxAscendingSum = 0

        while (i < nums.length){
            if (nums[i] > nums[i-1]){ // increasing 
                sum += nums[i]
            }
            else {
                sum = nums[i]
            }
            maxAscendingSum = Math.max(maxAscendingSum, sum)
            i++
        }
        return maxAscendingSum
    }
}
