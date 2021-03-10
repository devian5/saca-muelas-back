const express = require('express');
const cors = require('cors')
const db = require('./db');

const app = express();
const router = require('./router');

const port = 3000;

app.use(express.json());
app.use(cors());

app.use(router);

db.authenticate().then(()=>{
    console.log('DB is connect')
    app.listen(port, () => {
        console.log(`I am ready in http://localhost:${port}`);
    })

}).catch(console.log);