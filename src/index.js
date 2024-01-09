const app = require('express')();

app.get('/', (req, res) => {
    res.send('Docker is awesome!');
});

const port = process.env.PORT || 8080

app.listen(port, () => console.log('Server is up!'));
