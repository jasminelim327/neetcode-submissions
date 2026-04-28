class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // map it alphabets and zeros
        //  for every str 
            // zeros and alphabets mapped and parsed into the dictionary so that all str w the same letter num is grouped
        //  return as a list of list
        const alphabets = ["a", 'b','c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y','z']
        let countMap ={}
        
        for (let i = 0; i < strs.length; i++){
            let str = strs[i]
            let zeros = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

            for (let ch of str){
                for (let chIndex in alphabets){
                    if (alphabets[chIndex] == ch){
                        zeros[chIndex] +=1
                    }
               
            }
            }

            if (!countMap[zeros]){ //cannot .length here
                countMap[zeros] = [str]
            }
            else{
                countMap[zeros].push(str)
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



