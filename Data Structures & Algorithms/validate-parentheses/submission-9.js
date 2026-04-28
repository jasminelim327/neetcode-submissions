class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        // close to open 
        let closeToOpen ={ ']':'[' , '}': '{', ')': '('}
        let stack = []

        for (let ch of s){

            if (closeToOpen[ch]){
                if(stack.length > 0 && stack[stack.length-1]== closeToOpen[ch]){
                    stack.pop()
                } 
                else{
                    return false
                }
            }

            else{
                stack.push(ch)
            }
        }

        return stack.length ==0

       
}
}


//  let closeToOpen = {']': '[', '}': '{', ')':'('}
//         let stack = []

//         for (let c of s){
//             if (closeToOpen[c]){ // c is a close bracket
//                 if (stack.length > 0 && closeToOpen[c] === stack[stack.length-1]){
//                     stack.pop()
//                 }
//                 else {
//                     return false
//                 }

//             }
//             else {
//                 stack.push(c)
//             }
//         }
//         return stack.length == 0 
//         }