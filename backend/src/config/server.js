const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const port = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () => {
  console.log(`Back-end rodando na porta ${port}.`)
})
