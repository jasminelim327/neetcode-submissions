class Solution {
  isAnagram(s, t) {

    var count = {}
    
    if (s.length != t.length){
        return false
    }

    for (let ch of s){
        count[ch] = (count[ch]|| 0) +1
    }

    for (let ch of t){
        if (!count[ch]){
            return false
        }
        count[ch]--
    }

    return true
  }
}
