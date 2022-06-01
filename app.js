const _ = require('lodash')

const items = [2,[4,[5,[7]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)