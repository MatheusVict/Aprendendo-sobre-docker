const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('oi atualizado')
})


app.listen(3000, () => {
    console.log('iniciado no http://localhost:3000')
})