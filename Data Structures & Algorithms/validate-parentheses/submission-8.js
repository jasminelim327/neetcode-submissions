class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        // close to open 

        //  i do feel panic because i cant remember the answer now 
        let closeToOpen = {']': '[', '}': '{', ')':'('}
        let stack = []

        for (let ch of s){
            
            if (closeToOpen[ch]) //ch is close bracket 
            //  if a opening bracket meet a corresponding close bracket means its compatible
            {  
                if (stack.length > 0 && stack[stack.length-1] === closeToOpen[ch] ){
                    stack.pop()
                }
                else {
                    return false
                }
                
                
                
               
            }
            else {
                stack.push(ch) // push a close bracket // forget about negative situation 
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