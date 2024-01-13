const ldsh = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = ldsh.flattenDeep(items);
console.log(newItems);
