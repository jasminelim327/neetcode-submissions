class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        //  parse the address and then 
        let res = new Set()
        for (let email of emails){
            let name = email.split('@')[0]
            let domain = email.split('@')[1]

            let front = ''
            for ( let ch of name){
                if (ch == '+'){
                    break
                }
                else if (ch != '.'){
                    front += ch
                }
            }
            front += '@'
            front += domain

            res.add(front)

        }

        return res.size

        
    }
}
