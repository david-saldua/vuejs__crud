const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: 'http://localhost:8081'

};


app.use(cors(corsOptions));



// parse request of content-type -- application/json
app.use(bodyParser.json());


// parse request of content-type -- application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());



const db = require('./app/models');
db.mongoose
        .connect(db.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
        })
        .then(() => {
                console.log('Connected to database!');
        })
        .catch(err => {
                console.log('Error connecting to database', err);
                process.exit();
        })



// simple route

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the application of MEVN stack'})
})

// set up the port, listen for request

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

