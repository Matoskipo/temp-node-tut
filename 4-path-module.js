const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'text.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

// to get the absolute path we use the resolve() method

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)