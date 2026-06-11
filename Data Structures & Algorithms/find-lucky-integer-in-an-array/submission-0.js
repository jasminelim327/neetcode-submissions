class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        // parse first into a dictionary 
        let maxLuckyNumber = -1
        let arrDict = {}

        for (let num of arr ){
            arrDict[num] = (arrDict[num]?  arrDict[num] : 0)+1
        }
        console.log(arrDict)


        // find the one w the same integer as the frequency

        for (let num of arr){
            let frequency = arrDict[num]
            if (frequency == num){
                maxLuckyNumber = Math.max(num, maxLuckyNumber)
            }
        }

        return maxLuckyNumber


    

        

        //  return -1 if dont have 

        //  find the max value 
    }
}
