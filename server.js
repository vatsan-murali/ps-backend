const dotenv = require('dotenv')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin:"http://localhost:3001" 
    }))

dotenv.config({path:'./config.env'})
require('./db/conn')

app.use(require('./routes/auth'))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})