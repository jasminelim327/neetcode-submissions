class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length-1

        while (l <= r){
            let m = l + Math.floor((r-l)/2)
            if (nums[m] == target){
                return m
            }

            else if (nums[m] >= nums[l]){ // [4,5,6,7,1,2,3] right is sorted  
                if (target >= nums[l] && target <= nums[m] ){
                    r = m-1
                }  
                else {
                    l = m+1
                }
            }

            else {
                if (target >= nums[m] && target <= nums[r]){
                    l = m+1
                }
                else 
                {
                    r= m-1
                }
            }
        }

        return -1

    }
}


//  let l = 0 , r = nums.length - 1 
//         while (l <= r) {
//             let m = l+ Math.floor((r-l)/2)

//             if ( nums[m] == target){
//                         return m
//             }
            
//             if (nums[l] <= nums[m]) { // left is sorted
//                 if (target >= nums[l] && target <= nums[m]){  
//                     //target on the left sorted side 
//                     r = m -1
//                 }
//                 else {
//                     l = m + 1
//                 }
//             }

//             else { // right is sorted
//                 if (target >= nums[m] && target <= nums[r]){  
//                     //target on the right sorted side
//                      l = m + 1
//                     }
                    
//                     else{
//                         r = m -1
//                     }
                
//             }
//         }
//         return -1
//     }
