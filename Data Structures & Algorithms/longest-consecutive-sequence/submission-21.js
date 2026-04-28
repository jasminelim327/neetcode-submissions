class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums)
        let maxLength = 0

        for (let num of nums){
            if (!numSet.has(num - 1)){
                //this number is a start
                let current = num
                var  length = 1

                while (numSet.has(current + 1)){
                    length+=1
                    current++
                }
                maxLength= Math.max(length, maxLength)
            }
        }
        return maxLength




        
        


    }
}
