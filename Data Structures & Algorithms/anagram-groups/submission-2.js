class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // 2 array 
        //  alphabets array 
        var countMap ={}
        const alphabets = ["a", 'b','c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y','z']

        for (let str of strs){
            let zeros = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            
            for (let i = 0; i <str.length; i++){
                console.log(str)
                let ch = str[i]
                console.log(ch)
                for (let letterIndex =0; letterIndex < alphabets.length; letterIndex++ ){
                    if (alphabets[letterIndex] == ch ){
                        zeros[letterIndex] += 1 
                    }
                }
            }

            if (!countMap[zeros]){
                countMap[zeros] = [str]
            }else {
                countMap[zeros].push(str) 
            }
        }

        return Object.values(countMap)

        // make it into map 
        //  any str with same fre + ch will be in the same value array in a map key value pair 
        // return all the values of the object values
                // return Object.values(countMap)

    }
}



