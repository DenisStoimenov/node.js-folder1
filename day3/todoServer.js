const { MongoClient, ObjectId } = require('mongodb');
const http = require('http');
const uri = 'mongodb+srv://sourcemx:sourcemx@sourcemx.fx5fp.mongodb.net/?retryWrites=true&w=majority';
let client = null;
createServerconnection().then(_client => client = _client).catch(console.error);
http.createServer(async (req, res) => {
    // const client = await createServerconnection();
    // console.log(req);
    if (req.url === '/notes') {
        const myNotes = await listNotes(client);
        res.write(JSON.stringify(myNotes));

    }
    if (req.url === '/fancy-notes') {
        const myNotes = await listNotes(client);
        const fancyNotes = myNotes.map(note => {
            return `
            <div style='border: 1px solid black; background: yellow; width: 300px;display: inline-block; margin: 10px; '>
                <div> ${note._id} </div>
                <div> ${note.title} </div>
                <div>${note.description}</div>
            </div>
                `;

        }).join('');
        res.write( `${fancyNotes}`);


    }
    if (req.url === '/'){
        res.write('This is my notes backend');

    }
    res.end();
}).listen(8080);



async function createServerconnection() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('connected to server - success!!!!!!');
        return client;
    } catch (e) {
        console.error(e);
    }

}



async function listNotes(client) {
    const response = await client.db().collection('notes2').find({ title: 'I am a note' }).toArray();
    return response;
}



async function addTodoNote(client, todoNote) {
    const response = await client.db().collection('notes2').insertOne(todoNote);
    console.log(`New note created with id ${response.insertedId}`);
    console.log(response);
}



//problem so listDatebase