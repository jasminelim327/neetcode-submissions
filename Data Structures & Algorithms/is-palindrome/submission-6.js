class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

      var sMod = ''
      for (let ch of s){
         if (/[A-Za-z0-9]/.test(ch)){
            sMod += ch.toLowerCase()
         }
      }

      // start from back and start from front
         let i =0 
         let j = sMod.length-1
      
         while ( i < j ){ 
            if (sMod[i] != sMod[j]){
               return false
            }
            i ++
            j--
         }
         return true
    }
}


// //  order is important 
//         //  return true or false only 

//          s = s.split("").join()
//          var concat = ""

//          for (let ch of s){
//             if (/[A-Za-z0-9]/.test(ch)) 
//             {
//                concat += ch.toLowerCase()
//             }
//          }

//          let flip = ""

//          for (let i = concat.length-1 ; i >=0 ; i--){
//             flip += concat[i]
//          }

//          return flip == concat

//         // flip the entire s around and then check if the two are the same
