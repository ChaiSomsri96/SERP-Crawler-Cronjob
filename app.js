const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async (err, client) => {
    const db = client.db('crawler');
    const collection = db.collection('users');
    await collection.updateMany({}, {$set: { 
        "majestic.used" : 0,
        "semrush.used" : 0,
        "clearout.used" : 0,
        "hunterio.used" : 0
     }});
    if (err) {
        console.error(err)
    }
    client.close();
    return;
});