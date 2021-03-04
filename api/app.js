const express = require('express');
const db = require('./db');
const app = express();
const router = require('./router');

const port = 3000;

app.use(express.json());
app.use(router);

db.then(()=>{
    app.listen(port, () => {
        console.log(`I am ready in http://localhost:${port}`);
    })
}).catch(console.log);