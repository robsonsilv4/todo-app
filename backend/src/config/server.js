const express = require('express')
const bodyParser = require('body-parser')
const allowCors = require('./cors')

const server = express()
const port = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => {
  console.log(`Back-end rodando na porta ${port}.`)
})

module.exports = server
