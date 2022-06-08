const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb+srv://sourcemx:sourcemx@sourcemx.fx5fp.mongodb.net/?retryWrites=true&w=majority';

async function main() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('connected to server - success!!!!!!');
        // await addTodoNote(client, {
        //     title: 'I am a note',
        //     description: 'You need to buy pizza !!! do not forget',
        // });
        // const id = "62a07a065c898cd8b00fdb3f";
        // const newDescription = 'I am new!';
        // await updateNote(client, id, newDescription);
        await listNotes(client);

        // await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

// main().catch((e) => console.error(e));
main().catch(console.error);

async function listNotes(client) {
    const response = await client.db().collection('notes2').find({title: 'I am a note'}).toArray();
    console.log(response);
}

async function updateNote(client, id, newDescription) {
    const response = await client.db().collection('notes2').updateOne(
        { _id: ObjectId(id) }, 
        { $set: { description: newDescription } },
    );
    console.log(response);
}

async function addTodoNote(client, todoNote) {
    const response = await client.db().collection('notes2').insertOne(todoNote);
    console.log(`New note created with id ${response.insertedId}`);
    console.log(response);
}

async function listDatabases(client) {
    const dbList = await client.db().listDatabases();
    console.log(dbList);
}

//problem so listDatebase