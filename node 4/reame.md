# INFORMATION
go to website npmjs.com for downloading the npm third party packages.

# nodemon
first install the nodemon. only once
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

write nodemon filename in terminal instead of node filename, it will start live 

# package.json
1. it is necessary when we are using third party pacakges
2. and it is specific to every project
3. npm init 

# loadash 
1. npm i --save lodash
2. it is one of third party package which use for different method
3. after installing  it will show in package.JSON file dependicies lodash
4. if node modules get delete just write npm install in terminal. or if you are using someone else code then too.

# express
1. npm install express
2. same as above
3. framework of node js
4. const express = require('express');: This line imports the Express.js framework. By requiring the 'express' module, you make all of Express's functionality available for use in your application.

const app = express();: This line creates an instance of the Express application. The app variable is an object that represents your web application. You'll use this app object to define routes, handle HTTP requests, and configure your application's behavior.

After creating the app instance, you can start defining routes, middleware, and other settings to build your web application. Express is a versatile framework that simplifies the process of creating web servers and handling HTTP requests in Node.js.


