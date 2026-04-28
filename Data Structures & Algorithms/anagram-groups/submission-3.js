class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // if they have the same key value pair, they are of the same groupAnagrams
        
        //  each str of strs will have the key value pair of alphabets 
        // will then store the frequency of each letter as key and str in an array

        const alphabets = ["a", 'b','c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y','z']
        var countMap = {}

        for (let str of strs){
            let zeros = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

            // parse the alphabet with frequency
            for (let ch in str){
                for (let letterIndex in alphabets){
                    if (str[ch] == alphabets[letterIndex]){
                        zeros[letterIndex] += 1
                    }
                }
            }
            
            // ----- this part is about the mapping the alphabet object w the string -----// 
            if (countMap[zeros] && countMap[zeros].length >0){
                    countMap[zeros].push(str)
            }   
            else{
                countMap[zeros] = [str]
            }
        }

        return Object.values(countMap)
        
    }

}

//     var countMap ={}
//         const alphabets = ["a", 'b','c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y','z']

//         for (let str of strs){
//             let zeros = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            
//             for (let i = 0; i <str.length; i++){
//                 console.log(str)
//                 let ch = str[i]
//                 console.log(ch)
//                 for (let letterIndex =0; letterIndex < alphabets.length; letterIndex++ ){
//                     if (alphabets[letterIndex] == ch ){
//                         zeros[letterIndex] += 1 
//                     }
//                 }
//             }

//             if (!countMap[zeros]){
//                 countMap[zeros] = [str]
//             }else {
//                 countMap[zeros].push(str) 
//             }
//         }

//         return Object.values(countMap)
// }

// // 2 array 
//         //  alphabets array 
        

//         // make it into map 
//         //  any str with same fre + ch will be in the same value array in a map key value pair 
//         // return all the values of the object values
//                 // return Object.values(countMap)



