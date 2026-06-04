class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let dict1 = {} 
        let dict2 = {}
        let sArray = s.split(" ")

        if (pattern.length != sArray.length){
            return false
        }

        // order must follow though 

        for (let i=0 ; i < pattern.length ; i ++){
            if (!dict1[i]){
                dict1[pattern[i]] = sArray[i] 
            }
        }

        for (let j=0; j < pattern.length; j++){
            if ( !dict2[j]){
                dict2[sArray[j]] = pattern[j] 
            }
        }


        for (let num = 0; num < pattern.length; num ++){

            if (pattern[num] != dict2[sArray[num]]){
                return false 
            }
            if (sArray[num] != dict1[pattern[num]]){
                return false 
            } 
        }

        return true
    }
}
