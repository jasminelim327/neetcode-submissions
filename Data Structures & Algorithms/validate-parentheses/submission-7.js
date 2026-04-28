class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let closeToOpen = {']': '[', '}': '{', ')':'('}
        let stack = []

        for (let c of s){
            if (closeToOpen[c]){ // c is a close bracket
                if (stack.length > 0 && closeToOpen[c] === stack[stack.length-1]){
                    stack.pop()
                }
                else {
                    return false
                }

            }
            else {
                stack.push(c)
            }
        }
        return stack.length == 0 
        }
}
