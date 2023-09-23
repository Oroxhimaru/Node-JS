const express = require('express');

//express app
const app = express();

//listen for request
app.listen(3000);

//route
app.get('/', (req, res) => {
   // res.send('<h1>Zura Janai, Katsura Da</h1>');
   res.sendFile('./views/Registration form.html', { root: __dirname });
});
app.get('/about', (req, res) => {
   // res.send('<h1>I am Madao</h1>');
   res.sendFile('./views/about.html', { root: __dirname });
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});  //this always should be in bottom, coz use() fire callback function on every single link