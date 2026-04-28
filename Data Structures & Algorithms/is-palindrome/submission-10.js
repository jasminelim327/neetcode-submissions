class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        //  have two pointers to check
        //  one from the front and one from the back 


         s = (s.split(" ").join("")).toLowerCase()
         let edittedS = ''
         for (let ch of s){
            // use regex
            if (/[a-z0-9]/.test(ch)){
                edittedS += ch
            }
         }


        let i = 0
        let j = edittedS.length -1

        while (i <= j ){
            if (edittedS[i] == edittedS[j]){
                console.log(i,j)
                i++
                j--
            }
            else{
            return false

            }

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
