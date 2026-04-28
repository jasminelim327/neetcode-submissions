class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //  reverse for loop and compare if its still the same 
        let ori = s.split("")
        let ori_processed =[]
        let letters = "qpwoeirutylaksjdhfgmznxbcvQPWOEIRUTYALSKDJFHGZMXNCBV1234567890"
        for (var i = ori.length-1 ; i>=0; i--){
            if (letters.includes(ori[i])){
                ori_processed.push(ori[i].toLowerCase())
            }
        }
        console.log("ori_processed", ori_processed)

        if (ori_processed.length ==2){
            if (ori_processed[0] != ori_processed[1]){
                return false
            }
        }
        for (var i = ori_processed.length-1 ; i>=0; i--){
            // consoel.log(i)
            // console.log()
            
            if (ori_processed[i]== ori_processed[ori_processed.length-1-i]){
                console.log("ori_processed[i]", ori_processed[i])
                console.log("ori_processed[ori.length-i]", ori_processed[ori_processed.length-1-i])
                continue
            }else{
                return false
            }
        } return true
    }
}
