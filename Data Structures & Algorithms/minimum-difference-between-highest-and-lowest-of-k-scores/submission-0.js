class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        //  sliding window ? 
        let numsSorted = nums.sort((a,b)=> a-b)
        console.log(numsSorted)

        let i = 0
        let j = k-1 
        let minDifference = numsSorted[j] - numsSorted[i] 

        while (j <nums.length){
            let minNum = numsSorted[i]
            let maxNum = numsSorted[j]
            minDifference = Math.min(maxNum-minNum, minDifference)
            i++
            j++
        }

        return minDifference


    }
}
