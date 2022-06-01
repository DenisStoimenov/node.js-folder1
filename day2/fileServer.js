// const fs = require('fs');

// // const txt = fs.readFileSync('./index.html', 'utf-8');

// // console.log(txt);

// // console.log('Something else printed');
// fs.readFile('./index.html', 'utf-8', (err,txt) => {

//     console.log(txt);
// });
// console.log('something else printed');

const fs  = require('fs').promises;

async function printFile() {
    const txt = await fs.readFile('./index.html', 'utf-8');
    console.log(txt);

}
printFile();

console.log('Something else');

