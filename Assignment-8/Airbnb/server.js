const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const utils = require('./Utils/utils')
const config = require('./Utils/config')
const categoryRouter = require('./Routes/category')
const userRouter = require('./Routes/users')
const imageRouter = require('./Routes/image')
const propertyRouter = require('./Routes/property')
const bookingRouter = require('./Routes/booking')
const authorization = require('./Routes/authorization')

const app = express()


//middleware
app.use(cors())
app.use(express.json())
app.use(authorization)

app.use('/users', userRouter)
app.use('/category', categoryRouter)
//app.use('/image', imageRouter)
app.use('/property', propertyRouter)
app.use('/booking', bookingRouter)


app.listen(4000,'0.0.0.0', () => {
    console.log("Server started on port 4000..")
})