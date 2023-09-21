const fs = require('fs');

//stream and buffer
//small packages of data will show to us from dbzDetails.txt file by this method

const read = fs.createReadStream('./docs/dbzDetails.txt', { encoding: 'utf8' });
//for writing
const writeStream = fs.createWriteStream('./docs/dbz.txt'); 

//on() work same as eventlistener
read.on('data', (chunk) => {
    console.log("new chunk..........");
    console.log(chunk);   //get data by reading /console.log(chunk.toString()); if you want to see data in real string form / other way is { encoding: 'utf8' } add this in createReadStream
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);  //write data that comes by reading
});


// short way of doing abovee code just do piping
read.pipe(writeStream);

const writeStream2 = fs.createWriteStream('./docs/dbz2.txt'); 
read.pipe(writeStream2);