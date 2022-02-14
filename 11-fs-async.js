const { readFile, writeFile } = require('fs')
console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `here is the result : ${first}, ${second}`, (err, result) => {

            if (err) {
                console.log(err)
                return
            }
            console.log('done with !!! this file')
        })

    })

})

console.log('starting next task')

/*linyx@mint:~/Desktop/NodeJS_Linux$ node app.js 
start
starting next task
done with !!! this file */