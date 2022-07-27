const express = require('express');
const index = require('./routes/index');
const doulas = require('./routes/profissionaisRoutes');
const mongoose = require('./database/mongooseConnect');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const admRoutes = require('./routes/admRoutes');
const profissionais = require('./models/profissionaisModel');


require("dotenv").config()

const app = express()
mongoose.connect()

app.use(express.json())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
});

app.use('/', index);
app.use('/profissionais', profissionais);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(admRoutes)


module.exports = app
