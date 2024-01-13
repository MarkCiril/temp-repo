const {readFileSync, writeFileSync} = require('fs')

const txt1 = readFileSync('./trial/test.txt', 'utf8')
const txt2 = readFileSync('./trial/test2.txt', 'utf8')

writeFileSync(`./trial/writesyncfile.txt`, `files concatinated that contains : ${txt1} and ${txt2}`, {flag: 'a'})
