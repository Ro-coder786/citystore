
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
export {client,uri};