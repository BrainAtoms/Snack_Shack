const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars.engine({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'homepage'
}));

app.use(express.static('views'));

app.get('/', (req,res) => {
    res.render('homepage');
});

app.listen(port, () => {
    console.log('app listening to port ${port}');
});