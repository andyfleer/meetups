import { MongoClient } from 'mongodb';


const handler = async (req, res) => {
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://andyfleyer:andy12345@cluster0.jytteiw.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;