class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap ={}
        //  parse the num
        for (let num of nums){
            countMap[num] = (countMap[num]|| 0)+1 // num : frequency map
        }

        let buckets = {}
        //  build the buckets 
        for (let frequency = 1; frequency < nums.length+1 ; frequency++){
           buckets[frequency] = []
        }
        
        for (let num of Object.keys(countMap)){
            for (let frequency = 1; frequency < nums.length+1 ; frequency++)
                if (countMap[num] == frequency ){
                    // console.log(countMap[num], frequency)
                    buckets[frequency].push(num)
            }
        }

        // console.log(buckets)

        // parse on to latest list based on k
        let topK = []

        for (let j = nums.length; j > 0 ; j--){

            if (buckets[j].length > 0){
                for (let num of buckets[j] ){
                    topK.push(num)
                    if (topK.length == k){
                        return topK
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
  