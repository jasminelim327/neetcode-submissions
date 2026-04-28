class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {  
        let set = new Set(nums), maxLength = 0
        for (let num of nums){
            if (!set.has(num-1)){
                let start = num
                var length = 1

                while (set.has(start+1)){
                    start++
                    length+=1
                }
                maxLength= Math.max(length, maxLength)
            }
            
        }
        return maxLength
    }
}


