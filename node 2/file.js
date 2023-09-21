//calling built in module fs (file system) 
const fs = require('fs');

//reading files
fs.readFile('./docs/zfighters.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());   //console.log(data); try this first coz .toString() change buffer data into string mean actual words
});

// readFile() take a little time and meantime javascript run diff code like below
console.log('Goku is GOAT'); //this will run before readFile

//for checking err just change the file name zfighters.txt to wrong like zfighters12.txt it will show error


//writing files

/* fs.writeFile('./docs/zfighters.txt', "Yamcha is GOAT of trash characters", () => {
    console.log('updated');
});
This will update the zfighters.txt file to the second argument which is
"Yamcha is GOAT of trash characters", and then the third arguement will run
*/

// for if file doesn't exist, just name it and it will automatically create a file

fs.writeFile('./docs/yamcha.txt', "Yamcha is GOAT of trash characters", () => {
    console.log('create a yamcha file');
});


//directories
/*
fs.mkdir('./assets', (err) => {
     if (err) {
        console.log(err);
     }
     console.log("folder created");
});
*/

// if you run this above code  again it will show error that the folder already exist, so for not showing error we can do this below

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
           console.log(err);
        }
        console.log("folder created");
   });   
} else {
    fs.rmdir('./assets', (err) => {
      if (err) {
        console.log(err); 
         }
         console.log("folder deleted");
    })
}



//deleting files

if (fs.existsSync('./docs/ssj.txt')) {
    fs.unlink('./docs/ssj.txt', (err) => {
      if (err) {
        console.log(err)
      }
      console.log('file deleted')
    })
}