import express from 'express';

/** порт приложения */
const port = 3000;

const app = express();

app.use(app.router); // модуль для простого задания обработчиков путей


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
