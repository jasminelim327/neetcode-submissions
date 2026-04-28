class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let n = nums.length
       let prefixArray = Array(n)
       let suffixArray = Array(n)

        // fill in the prefix array
        // the product everythiing left from the current index

        // [1, 2, 3, 4] -> [1, 1, 2, 6]
        var product = 1
        for (let i = 0; i < nums.length ; i++){
            //  1,2,4,6
            if ( i == 0){
                prefixArray[0] = 1 // dont have anything to the left
            }
            else {
                product *= nums[i-1] 
                prefixArray[i] = product
            }
        }


        var suffixProduct = 1 

        for (let i = nums.length-1 ; i >= 0 ; i--){
            //  1,2,4,6
            if ( i == nums.length-1){
                suffixArray[i] = 1 // dont have anything to the right
            }
            else {
                // [48, 24, 6, 1]
                suffixProduct *= nums[i+1] 
                suffixArray[i] = suffixProduct
            }

            console.log(suffixArray, prefixArray)
           
        }

        let output =[]
        for (let i = 0; i < nums.length; i ++){
            output.push(prefixArray[i]*suffixArray[i])
        }

        return output

    }
}
