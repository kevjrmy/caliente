console.log("app.js")

const express = require('express')
const app = express()

module.exports = app

app.get('/', (req, res) => {
  res.send("Hola desde app.js!")
})