class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        //  only need to check the first and last string
        // use map and stack

        //  using map to find the match
        var map ={
            "}" :"{",
            "]":"[",
            ")":"("
        }
       
        var stack = []

        for (const char of s) {
        const isBracket = char in map; // checking if the closing bracket, if yes then push
        if (!isBracket) {
             stack.push(char);
        continue;
        }
        //  after pushing the half bracket need to check, from the top of the stack, if it has matching bracket, as it will need to close by order
        const isEqual = stack[stack.length - 1] === map[char]; // checking the matching opening bracket via for loop 
            if (isEqual) {
                stack.pop();
                continue;
    }
    return false; // if any point in time, not true, then return false 
}
return stack.length === 0; //exact match is found
    }
}

