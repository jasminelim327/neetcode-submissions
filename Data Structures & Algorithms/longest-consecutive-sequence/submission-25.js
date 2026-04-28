class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {  
        let maxLength = 0, numSet = new Set(nums)

        for (let num of nums){
            if(!numSet.has(num-1)){
                let start = num
                let length = 1

                while (numSet.has(start+1)){
                    start++
                    length += 1
                }

                maxLength = Math.max(length, maxLength)
            }
        }
        return maxLength
    }
}


