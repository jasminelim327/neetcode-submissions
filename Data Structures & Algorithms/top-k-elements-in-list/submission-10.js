class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = {} 

        // have a countmap on the integer and the count 
        // have a map from k to 0 to parse in the count and the integer from highest to lowest until k = 0

        for (let num of nums){
            countMap[num] = (countMap[num]|| 0 )+1
        }

        //  { "1" : 0 ; "2": 10}
        console.log(countMap)

        // leave the for loop from the feeding into the kMap
        
        // parse the countmap against the kMap
        //  
        //  {6: [10, 1], 5: []}   
        let kMap = {}
        for (let i= nums.length; i > 0 ; i--){
            kMap[i] = []
        }

        
        for (let key in countMap){
            if (kMap[countMap[key]]){
                kMap[countMap[key]].push(Number(key))
                } 
            }
        
        let bucket = []
        let i = nums.length
        while (bucket.length < k && i > 0){ 
                if (kMap[i].length >0){
                   for (let num of kMap[i]) {
                    bucket.push(num);
                    // Critical check: stop exactly when we hit k
                    if (bucket.length === k) return bucket;
                }
                }
            i --
        } 
        return bucket
        
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
  