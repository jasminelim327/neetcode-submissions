class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var hashtable = {}
        if (strs.length ==1 && strs[0].length ==1){
            return [strs]
        }

        for (var words of strs){
            var sorted = words.split("").sort().join("")
            if (hashtable[sorted]){
                hashtable[sorted].push(words)
            } else{
                hashtable[sorted] = [words]
            }
        }

        return Object.values(hashtable)

    }
}
