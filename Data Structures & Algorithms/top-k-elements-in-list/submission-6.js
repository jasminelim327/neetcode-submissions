class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // having dictionary to record the values 
        
        var countMap = {}

        for (let num of nums){
            countMap[num] = (countMap[num] || 0 )+1
        }


        // {"1":3 ; "2":4; "1": 2}

        var buckets = {}

        for (var i =0; i <= nums.length; i++){
            buckets[i] = []
        }

         for (let key in countMap){
            let frequency = countMap[key]
            buckets[frequency].push(Number(key))
        }

        // console.log(buckets)


        var topKArray = []
        var numsLength = nums.length
        while (topKArray.length < k && numsLength >= 0){
            console.log(buckets[numsLength-1])
            if (buckets[numsLength].length > 0)
            {
                for (let num of buckets[numsLength]){
                    topKArray.push(num)

                    if (topKArray.length === k){
                        return topKArray
                    }
                }
            }
            numsLength--
        }
        return topKArray
        
        // get all the values and then sort them ?
        // and get it from n to n-k

    }
}
