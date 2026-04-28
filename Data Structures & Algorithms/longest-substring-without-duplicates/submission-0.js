class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set()
        var res =0
        var l=0

        //
        //  using a for loop to go through every character
        for(var i =0; i <= s.length-1; i++){
            while (charSet.has(s[i])){
                charSet.delete(s[l])
                 l++ // 
                }
            charSet.add(s[i]) // need to push the 
            res = Math.max(res, i-l+1) // current index to minus the left
            // this is because, if there is no duplicate, then the
    }return res
    }
        
}
