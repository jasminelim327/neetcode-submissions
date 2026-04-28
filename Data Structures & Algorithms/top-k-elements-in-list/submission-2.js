class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
     topKFrequent(nums, k) {
        // to put it in a hash map with num as key, and frequency as value 
        let map = new Map()
        for (let i =0; i<nums.length; i++){
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i])+1)
            } else {
                map.set(nums[i], 1)
            }
        }

        let arr = Array.from(map.entries())
        // to translate into a key value pair array to find the max 2 frequency and its key 
        // arr.sort((a,b)=> b[1]-a[1]); // sort by the value in descending order

        arr.sort((a,b) => b[1]- a[1])
        
        let final = []
        for(let j = 0 ;j < k; j++){
            final.push(arr[j][0])
        }
        // sort based on the frequency
        return final
        // get the value of the key 
}}