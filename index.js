const express = require('express')
const { dbConnection } = require('./database/config')
const app = express()

require('dotenv').config();

app.use(express.static('public'))

app.use(express.json())

dbConnection()


app.use('/api/auth', require('./routes/auth'))
app.use('/api/exercise', require('./routes/exercise'))
app.use('/api/musclegroup', require('./routes/musclegroup'))
app.use('/api/workout', require('./routes/workout'))
app.use('/api/users', require('./routes/users'))



app.listen(process.env.PORT, () => console.log('Servidor corriendo' + process.env.PORT))