const express = require('express');
const app = express();

var hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

// Express hbs
app.set('view engine', 'hbs');

app.get('/', (req, res) => {



    res.render('home', { nombre: 'Fernando', anio: new Date().getFullYear() });
});
app.get('/about', (req, res) => {



    res.render('about', { anio: new Date().getFullYear() });
});



app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));