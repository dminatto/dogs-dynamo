const express = require('express');
const morgan = require('morgan');
const routes = require('./../../app/routes/index.routes');


module.exports.start = () => {

    require("dotenv").config();

    const app = express();
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: false,
        }),
    );

    app.use(routes);
    app.listen(3000, () => console.log('Server ON'));

}