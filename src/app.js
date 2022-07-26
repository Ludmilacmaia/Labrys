require("dotenv-safe").config();
const express = require('express');
const index = require('./routes/index.js');
const profissionais = require('./routes/profissionaisRoutes.js');
const mongoose = require('./database/mongooseConnect');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const cors = require('cors')
const app = express()
mongoose.connect()

app.use(express.json())
app.use(cors())

app.use('/', index);
app.use('/profissionais', profissionais);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));




module.exports = app
