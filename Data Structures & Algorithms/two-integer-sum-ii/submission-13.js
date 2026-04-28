class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let i = 0, j = numbers.length-1


        while (i != j){

            //  if its more than the target, j move left

            if (numbers[i]+ numbers[j] > target){
                j--
            }

            else if (numbers[i]+ numbers[j] < target){
                i++
            }

            else {
                return [i+1, j+1]
            }

        }


    }
}
