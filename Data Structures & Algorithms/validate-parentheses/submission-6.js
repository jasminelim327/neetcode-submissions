class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // var map ={
//             "}" :"{",
//             "]":"[",
//             ")":"("
//         }
       
//         var stack = []

//         for (const char of s) {
//         const isBracket = char in map; // checking if the closing bracket, if yes then push
//         if (!isBracket) {
//              stack.push(char);
//              continue;
//         }
//         //  after pushing the half bracket need to check, from the top of the stack, if it has matching bracket, as it will need to close by order
//         const isEqual = stack[stack.length - 1] === map[char]; // checking the matching opening bracket via for loop 
//             if (isEqual) {
//                 stack.pop();
//                 continue;
//     }
//     return false; // if any point in time, not true, then return false 
// }
// return stack.length === 0; //exact match is found
    isValid(s) {
        //  only need to check the first and last string

        if (s.length <=1){
            return false
        }
        // use map and stack
        const map = {"}": "{", "]":"[", ")":"("}
        let stack = []
        for (let chr of s){
            if (chr in map == false){
                stack.push(chr)
            }
            else if (stack[stack.length-1] == map[chr]){
                    stack.pop()
                    continue;
            }
            else {
                return false // need to count for cases that only has closebracket
            }
    } return stack.length== 0
}
}
