class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // skip if the current is the same as the previous

        //  big outer loop to 
        let triplets = []
        // nums = nums.sort()
        // nums.sort((a, b) => a - b); 
        nums.sort((a,b)=> a-b)

        for (let i = 0 ; i < nums.length ; i++ ){
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue; 
            
            let l = i+1
            let r = nums.length-1

            while (l < r ){
                if (nums[i]+ nums[l] + nums[r] < 0){
                    l++
                }
                
                else if (nums[i]+ nums[l] + nums[r] > 0){
                    r--
}
                else {
                    triplets.push([nums[i], nums[l] , nums[r]] )
                    l++ // importnat
                    r-- // importnat
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
            }}
            }
            return triplets

            }

}
