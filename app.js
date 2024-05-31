const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const {cron} = require('./cron')

const app = express();
const port = 9000;

cron()

app.use(cors());

app.get('/', (req,res) => {
    res.send({
        message:'app running'
    })
})
// Endpoint to serve JSON file
app.get('/apple-app-site-association', (req, res) => {
    const filePath = path.join(__dirname, 'apple-app-site-association.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.header('Content-Type', 'application/json');
        res.send(data);
    });
});

app.get('/assetlinks.json', (req, res) => {
    const filePath = path.join(__dirname, 'assetlinks.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.header('Content-Type', 'application/json');
        res.send(data);
    });
});
app.get('/assetlinks', (req, res) => {
    const filePath = path.join(__dirname, 'assetlinks.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.header('Content-Type', 'application/json');
        res.send(data);
    });
});
app.get('/.well-known/assetlinks', (req, res) => {
    const filePath = path.join(__dirname, 'assetlinks.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.header('Content-Type', 'application/json');
        res.send(data);
    });
});
app.get('/.well-known/assetlinks.json', (req, res) => {
    const filePath = path.join(__dirname, 'assetlinks.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.header('Content-Type', 'application/json');
        res.send(data);
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
