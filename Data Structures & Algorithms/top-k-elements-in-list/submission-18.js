class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // have the frequency of each of the num in nums 
        // have bucket from 1 to nums.length
        //  
        // from big to small bucket, add the nums in
        //  the respective bucket until the length is same as k 

        var countMap ={}

        for (let num of nums){
            countMap[num] = (countMap[num]|| 0) +1 // num and frequency
        }

        // {"2": 1}

        //  create buckets 
        var buckets = {} // with frequency as key and num as value
        for (let i = 1; i < nums.length+1; i++){ //
           buckets[i] = [] // have empty brackets for each bucket
        }
        
        for (let key in countMap){
            let frequency = countMap[key]
            buckets[frequency].push(Number(key))
        }

        let topKArray = []

        for (let j = nums.length; j> 0; j--){
            if (buckets[j].length > 0){
                for (let num of buckets[j]){
                    topKArray.push(num)

                    if (topKArray.length == k){
                        return topKArray
                    }
                }
            }
        }
}
}
    


// var countMap = {}

        // for (let num of nums){
        //     countMap[num] = (countMap[num] || 0 )+1
        // }


        // // {"1":3 ; "2":4; "1": 2}

        // var buckets = {}

        // for (var i =0; i <= nums.length; i++){
        //     buckets[i] = []
        // }

        //  for (let key in countMap){
        //     let frequency = countMap[key]
        //     buckets[frequency].push(Number(key))
        // }

        // // console.log(buckets)


        // var topKArray = []
        // var numsLength = nums.length
        // while (topKArray.length < k && numsLength >= 0){
        //     if (buckets[numsLength].length > 0)
        //     {
        //         for (let num of buckets[numsLength]){
        //             topKArray.push(num)

        //             if (topKArray.length === k){
        //                 return topKArray
        //             }
        //         }
        //     }
        //     numsLength--
        // }
        // return topKArray
  