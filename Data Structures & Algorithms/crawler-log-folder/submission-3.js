class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let l = 0
        let currentFolder = []

        while (l < logs.length){
            if (logs[l] == "../"){
                if (currentFolder.length > 0){
                    currentFolder.pop()
                }
            }
            else if (logs[l] == './'){
                l++
                continue
            }

            else {
                currentFolder.push(logs[l])
            }
            l++
        }
        console.log(currentFolder)

        return currentFolder.length
    }
}
