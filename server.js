const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static(`${__dirname}/dist/`))

const path = require('path')

app.listen(PORT, function () {
  console.log(`Chat app listening on port ${PORT}!`)
})

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})
