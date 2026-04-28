class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length){
            return false
        }
        var original = s.split("")
        var test = t.split("")
        for (var chr of s){
            if (test.includes(chr)){
                var index = test.indexOf(chr);
                if (index !== -1) {
            // Remove the character from the test array
                test.splice(index, 1);
        } 
            } else{
                return false
            }
        } 
        if (test.length == 0){
            return true
        } return false
    }
}
