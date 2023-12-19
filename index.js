const express = require('express')
const { dbConnection } = require('./database/config')
const cors = require('cors')
const app = express()

require('dotenv').config();

app.use(express.static('public'))

app.use(express.json())

dbConnection()
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use('/api/auth', require('./routes/auth'))
app.use('/api/exercise', require('./routes/exercise'))
app.use('/api/musclegroup', require('./routes/musclegroup'))
app.use('/api/workout', require('./routes/workout'))
app.use('/api/users', require('./routes/users'))



app.listen(process.env.PORT, () => console.log('Servidor corriendo' + process.env.PORT))