// let res =[]
        // nums.sort((a,b)=> a-b)
        // for (let i =0; i< nums.length-2; i ++){ //take note
        //     if (i > 0 && nums[i] === nums[i - 1]) continue;   //take note
        //     if (nums[i] > 0) break //take note
        //     let left = i +1
        //     let right = nums.length -1
        //     while(left<right){
        //         let threeSum = nums[i] +nums[left]+ nums[right] //take note
        //         if (threeSum > 0){ 
        //             right --
        //         }
        //         else if (threeSum < 0){
        //             left ++
        //         }
        //         else {
        //             res.push ([nums[i], nums[left], nums[right]])
        //             left ++
        //             right --
        //             while (left < right && nums[left]== nums[left-1])
        //             {
        //                     left ++ 
        //             }
        //             while (left < right && (nums[right] == nums[right+1])){
        //                     right--
        //                 }
        //             }
        //         }

        //     } return res

class Solution {
    threeSum(nums) {
        nums.sort((a,b)=> a-b)
        let res = []
        

        for (let i = 0; i < nums.length -2; i ++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;  // take note to avoid duplicate index value 
            let left = i +1
            let right = nums.length-1
            //  edge case
            if (nums[i]> 0){break} // if the current num is bigger than 0
            while (left < right){
                let threeSum = nums[i] + nums[left] + nums[right]

                if (threeSum == 0){
                    res.push([nums[i], nums[left], nums[right]])
                    left ++
                    right --

                    while (left < right && nums[left] == nums[left-1]){
                        left ++
                    }
                    while (left < right && nums[right] == nums[right+1]){
                        right --
                    }
                }
                else if (threeSum < 0){
                    left ++
                }
                else if (threeSum > 0){
                    right --
                }
            }
        } return res

    }
    }
