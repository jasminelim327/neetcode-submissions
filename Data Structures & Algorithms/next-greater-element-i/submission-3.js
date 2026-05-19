class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let res = []
        // parse 
        let num2Dict = {}

        for ( let i = 0 ; i < nums2.length; i++){ // key value pair of 
            //  num and index pair
            num2Dict[nums2[i]] = i
        }

        for (let i = 0; i < nums1.length; i++){
            let found = false
            let j = num2Dict[nums1[i]] +1
            while (j < nums2.length ){
                if (nums2[j] > nums1[i] && j != undefined){
                    found = true
                    res.push(nums2[j])
                    break
                }
                j++
            } 

            if (!found){
                res.push(-1) // have to figure out using this as else at the end of the loop
            }
        }
        return res
    }
}
