class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // 
        //  encode based on the index number of the character
        var strsInStrs =''
        for (var i =0 ;i <= strs.length-1; i++){
            strsInStrs += strs[i]
            // if (i != strs.length-1){
            strsInStrs += "~"
            // }
        }
        return strsInStrs
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str, 'its here')
        if (str == ""){
            console.log('haha')
            str.length == 0
            return []
        }
        var decode = str.split("~")
        return decode.slice(0,decode.length-1)
    }
}

var solution = new Solution
var str1 = solution.encode([])
console.log(typeof(str1), "str1")
var arr1 = solution.decode(str1)
console.log(arr1, "arr1")

