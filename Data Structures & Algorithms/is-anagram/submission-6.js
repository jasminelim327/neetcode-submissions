class Solution {
  isAnagram(s, t) {
    // substracy s from i 
    
    var sMap = {}

    for (let ch of s){
      sMap[ch] = (sMap[ch] || 0 ) +1
    }

    for (let ch of t){
      if (sMap[ch] > 0 ){
        sMap[ch] --
      }
      else {
        return false
      }
    }

    //  if all nets to zero then return true 
    let valueArray = Object.values(sMap)
    for (let num of valueArray){
      if (num != 0){
        return false
      }
    }return true

  }
}
