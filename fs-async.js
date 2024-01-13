const {readFile, writeFile} = require('fs')

readFile('./trial/test.txt','UTF8', (error404, result) => { 
    if (error404) {
        console.log(`error in read1 ${error404}`)
        return
    }

    const read1 = result;
    readFile('./trial/test2.txt','UTF8', (error404, result) => {
        if (error404) {
            console.log(`error in read2 ${error404}`)
            return
        }

        const read2 = result; 
        writeFile(`./trial/writeasyncfile.txt`, `This is the result of two files:  \n${read1} and \n${read2}`, (error404, result) => {
            if (error404) {
                console.log(`error in writefile ${error404}`)
                return
            }
            console.log(result)
        }) 
    })
})

