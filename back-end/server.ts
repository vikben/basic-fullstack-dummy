import http from 'http';
import express from 'express';

import data from './db.json';

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 5001;

app.get('/', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data)
});

server.listen(port, () => console.log(`Server has started on http://localhost:${port}`));