class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var final= []

        var count =0
        for (var i of nums){
            if (i == 0){
                count +=1
            }
        }

        var all_product = nums[0]
        for (var i=1; i <= nums.length-1; i ++){
            //  if this is the current index
            if (nums[i] == 0){
                continue
            }else{
            all_product *= nums[i]
            }
        }
         

        for (var i =0;i <= nums.length-1; i ++ ){
            //  doenst work if there is more than 1 zero in the array
            if (count > 1 && nums[i]== 0 ){
                final.push(0)
            }
            else if ( nums.includes(0) && nums[i] != 0){
                final.push(0)
            }
            else if (nums[i]== 0){
                final.push(all_product)
            }
            else(
            final.push(all_product/nums[i])
            )
        }
        return final
       
}
}