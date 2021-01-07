const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));//Πρέπει να το πούμε πού ζουν τα αρχεία μας και πρέπει επίσης να το πούμε σε ποια θύρα θα πρέπει να ακούει

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});
