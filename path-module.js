const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//  to get the system uptime
 console.log(`The system uptime is ${os.uptime()} seconds`)

//  built in methods in modules

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)