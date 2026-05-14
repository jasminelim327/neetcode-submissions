class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0
        let ageIndex = 11
        for (let detail of details){
            // if the characters at 12 to 13 is > 60 
           let age = Number(detail.slice(11, 13))
           if (age > 60){

            count +=1
           }


            
        }
           return count


    }
}
