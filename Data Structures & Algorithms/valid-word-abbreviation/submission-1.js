class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let i = 0, j = 0

        while (i < word.length && j < abbr.length){
            if (abbr[j] == '0'){
                return false 
            }

            if (isNaN(abbr[j])){
                 if( abbr[j] == word[i]){
                     i++
                    j++
                 }
                 else {
                    return false
                 }
            }

            else if (!isNaN(abbr[j])){ // its a number 
                let subLen = 0
                while (j < abbr.length && !isNaN(abbr[j])){
                    subLen = subLen* 10 + Number(abbr[j])
                    j++
                }
                i += subLen
            }

        }
        return i === word.length && j == abbr.length
    }
}
