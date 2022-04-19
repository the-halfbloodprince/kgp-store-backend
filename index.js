const express = require('express')

const app = express()

const PORT = 8000

app.get('/', async (req, res) => {

    res.send('Hi from server')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})