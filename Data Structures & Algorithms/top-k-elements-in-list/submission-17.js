class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = {}
        for (let num of nums ){
            countMap[num] = (countMap[num] ||0 )+1
        }

        // {"-1":2}
        
        // make the buckets
        let buckets = {}
        for (let i = nums.length ; i > 0; i-- ){
            buckets[i] = [] //frequency : num 
        }

        for (let key in countMap){ // int : freq
            if (buckets[countMap[key]] ){
                buckets[countMap[key]].push(key)// num in countMap is the int 
            }
        }

        console.log(buckets)

        let j = nums.length
        let kArray = []
        while (j > 0){
            if (buckets[j].length > 0 ){
                for ( let num of buckets[j]){
                    kArray.push(Number(num))
                }
            } 
            if (kArray.length == k){
                return kArray
            }
            j --
        } 
        
        return kArray
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
  