const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRoutes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Mini message board running on port ${PORT}`)
);
