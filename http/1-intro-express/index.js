const express = require('express')
const app = express()
const port = 8081



app.get('/koder', (req, res) => {
    res.json('Aqui puedes ver todos los koders');
});

app.post('/koder', (req, res) => {
    res.json('Aqui puedes crear koders');
});


app.put('/koder', (req, res) => {
    res.json('Aqui puedes sustituir un koder');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});