const http = require('http');
const fs = require('fs');

//it is not necessary to store this in variable, but in case you want to use it in future.
const server = http.createServer((req, res) => {   //req : request , res : respond
     // console.log('request made'); after running the listen() below run this console
     // console.log(req); second time try this
     console.log(req.url, req.method);

     // routing
  let path = './views/';

/*
     //set header content type
     res.setHeader('Content-Type', 'text/html'); //text/plain use this first
     res.write("Hello, Ulquiora <br>");
     res.write("<h1> Hello, Kurosaki Ichigo <br> </h1>");
     res.end(); //end of sending now the response will going to send after end(), check point 2 in reame.md */


     // send html file
     fs.readFile('./views/Registration form.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
     });

    }); 

//port number 3000 
server.listen(3000, 'localhost', () => {
    console.log("listening for request on port 3000");
} )

//for cancelling out the process of listening press ctrl + c in terminal
//write localhost:3000 in browser and you will see a msg in terminal 'request made'