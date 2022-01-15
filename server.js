const express = require('express')
const app = express()
const port = 3333
const cors = require('cors')
const fibonacci = require('./fibonacci')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.post('/api', (req, res) => {
  const { firstNumber, secondNumber } = req.body
  const result = fibonacci(+firstNumber, +secondNumber)
  return res.json({ message: 'success!', data: result })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
