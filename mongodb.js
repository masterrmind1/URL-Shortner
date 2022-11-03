const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'URL_shortner'
mongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("unble to connect")
    }
    const db = client.db(databaseName)
    db.collection('Users').insertOne({
        name: 'Paurnima',
        Email: 'abcd@gmail.com',
        password: 'password'
    })
})