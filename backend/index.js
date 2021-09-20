import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

// load the environment variables
dotenv.config()

// get access to the mongodb client
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.log(err.stack)
    process.exit(1)
})
.then(async client => {
    app.listen(port, () => {
        console.log(`MERN is running on port: ${port}`)
    })
})

