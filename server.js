const express = require('express')
const dotenv = require('dotenv')
const mongoose =require('mongoose')
const boyParser = require('body-parser')
const app = express()
const port = 6002

const authRouter  = require('./routes/auth')
const userRouter = require('./routes/user')
const restaurantRouter = require('./routes/restaurant')

dotenv.config()

const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({credential : admin.credential.cert(serviceAccount)})
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("DB Connection success !")).catch((err)=> console.log(err))


app.use(boyParser.json());
app.use(boyParser.urlencoded({extended:true}));
app.use('/', authRouter)
app.use('/api/users', userRouter)
app.use('/api/restaurant', restaurantRouter)

app.listen(process.env.PORT || port, () => console.log(`BackendTest app listening on port ${process.env.PORT}!`))