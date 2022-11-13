const {MongoClient} = require('mongodb')

const uri ='mongodb+srv://vrm:mongodb1234@cluster0.clbkfyg.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri)

async function main() {
    try {
        await client.connect()
        console.log('database is active ')
    } catch (e) {
        console.error(e)
    } 
}

main().catch(console.error);

const dbName = 'company_webSite'
const collectionName = 'contact'

async function insertData(data){
    try {
        await client.db(dbName).collection(collectionName).insertOne(data)
    } catch (e) {
        return e
    }  
}


module.exports = {insertData}