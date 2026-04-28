class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let sizes = []
        let res = ''

        for (let str of strs){
            sizes.push(str.length)
        }

        for (let size of sizes){
            res += String(size)
            res += ','
        }

        res += "#"

        let str = strs.join('')
        console.log(res+str)
        return res + str

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let sizes =[]

        for (let i = 0; i < str.length; i++){
           // get the num ch if its same // 
           if ( str[i] == '#' && str[i-1]== ','){
                sizes = str.slice(0,i-1).split(',') 
                var endOfNumber = i
                break
                //  from this i onwards is where i can start splitting 
           }
        }

        let word = str.slice(endOfNumber+1, str.length)
        let index = 0
        console.log(word, sizes)
        for (let sz of sizes){
                res.push(word.slice(index, index+Number(sz)))
                console.log(index)
                index += Number(sz)
        }

        return res
    }
}


// if (strs.length == 0){
//         return ''
//        }

//        let sizes = [], res = ""
       
//        for (let s of strs){
//         sizes.push(s.length)
//        }

//         // let sizes of the 
//         for ( let sz of sizes){
//             res += sz + ',' // delimiter
//         }
//         res += "#" // second delimiter once done 
//         for ( let s of strs){
//             res += s // [5,7,#happybirthday]
//         }
//         return res


//         //  the encoded str will include first the length then the delimiter for the nums and the delimiter from the number and text
//         let res = []
//         let i = 0
//         let sizes = []

//         //  go all the way until meet # to get the sizes
//         if (str.length == 0 ) return []

//         //  get the sizes of the substr
//         while ( str[i] !== "#"){
//             let sz = ''
//             //  gonna take it until meet a ',' 
//             while (str[i] != ","){
//                 sz += str[i]
//                 i++
//             } 
//             sizes.push(Number(sz))
//             sz = ''
//             i++ 
//         }

//         //  move the index to more 
//         i++

//         for ( let sz of sizes){
//             let word = str.slice(i, i+sz)
//             res.push(word)
//             i += sz

//         }

//         return res
