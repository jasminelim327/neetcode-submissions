class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = {}

        for (let num of nums){
            // number : frequency
            countMap[num] = (countMap[num] ||0 )+1
        }

        let buckets = {}

        for (let i = 0 ; i <= nums.length; i++){
            buckets[i] = []
        }
        console.log(buckets)

        // i now need to fill buckets with frequency :number

        for (let key in countMap){
            // 0, 1, 2,3,4 
            let fre = countMap[key] //
            if (buckets[fre]){ 
                buckets[fre].push(key)// i need the key of the countMap 
            }
        }

        console.log(countMap)
        console.log(buckets)

        
        var topK = []
        let j = nums.length
        while (j>= 0 && k!= topK.length){
            if (buckets[j].length >0){
                for (let num of buckets[j]){
                    topK.push(num)
                }
                if (k == topK.length){
                    return topK
                }
            } j--
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
  