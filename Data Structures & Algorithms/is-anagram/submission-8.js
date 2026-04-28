class Solution {
  isAnagram(s, t) {
    //  create an map that is fed w s 
    let sMap = {}

    //  loop through t and the substract from the sMap

    for ( let ch of s){
        sMap[ch] = (sMap[ch] || 0) +1
    }

    for (let ch of t){
        if (sMap[ch] > 0){
            sMap[ch] --
        }
        else{
            return false
        }
    }
    // if original more than actual  
    //  how to check if everything is 0
    
    let objArray = Object.values(sMap)

    for ( let obj of objArray){
        if( obj != 0){
            return false
        }
    }

    return true
   
    //  if cannot substract then return false, means they are not anagram


  }
}



// // substracy s from i 
    
//     var sMap = {}

//     for (let ch of s){
//       sMap[ch] = (sMap[ch] || 0 ) +1
//     }

//     for (let ch of t){
//       if (sMap[ch] > 0 ){
//         sMap[ch] --
//       }
//       else {
//         return false
//       }
//     }

//     //  if all nets to zero then return true 
//     let valueArray = Object.values(sMap)
//     for (let num of valueArray){
//       if (num != 0){
//         return false
//       }
//     }return true

//   }

  //