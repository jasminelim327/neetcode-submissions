class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let firstStrLength = strs[0].length
        let longest =''
        
        if (firstStrLength ==0){
            return longest
        }

        for (let i = 0; i < firstStrLength; i++){
            let ch = strs[0][i]
            for (let str of strs){
                if (str[i] == ch){
                    continue
                }

                else {
                    return longest
                }
                
            }

            longest += ch
        }
        return longest
    }
}
