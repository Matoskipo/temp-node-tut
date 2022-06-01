const{readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-reuse.txt', `here is the updated text: ${first},
 ${second}`, {flag: 'a'})