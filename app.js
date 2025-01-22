require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { routes } = require('./components');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
        console.log(r.route.path); // Esto imprimirá todas las rutas registradas
    }
});
// Routes
app.use('/api', routes);

// errors
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: 'Something went wrong' });
});

module.exports = app;
