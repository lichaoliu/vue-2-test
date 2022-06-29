const express = require('express')
const compression = require('compression')

// const https = require('https')
// const fs = require('fs')

const app = express()

// const options = {
//     cert: fs.readFileSync('文件'),
//     key: fs.readFileSync('文件')
// }


// 一定要把这一行代码 写到 静态资源托管之前
app.use(compression())
app.use(express.static('./dist'))

app.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})

// https.createServer(options, app).listen(443)