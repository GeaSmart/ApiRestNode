const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 8080);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/thirdparty'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
}
)