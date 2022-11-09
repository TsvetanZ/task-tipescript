import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello WORLD!');
});

app.get('/about', (req, res) =>{
    res.send('About')
});

app.listen(8080, () => {
    console.log('Servere listening on: 8080')
});