const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api/hello', (req, res) => {
    res.send({
        express: 'Hello From Express'
    });
});
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});
app.get('/api/sites', (req, res) => {
    res.send([{
        id: "0001",
        name: "My First Site",
        description: "A brief description about this site, likely to be later replaced by a site preview thumbnail."
    }])
})
app.get('/api/oauth2callback', (req, res) => {
    console.log(req.headers);
    res.redirect('/sites');
})

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));