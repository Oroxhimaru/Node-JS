# NODE JS Details
1. what is backend deveeloper
A backend developer is the person who work or program server and database.
2. why backend?
to make website more usable and purposeful for the user e.g a front-end download button will not work without backend
3. what we need to learn backeend?
  nodejs , mongodb,  mongoose, expressjs.
4. install node js and download from here https://nodejs.org/en/download.
   installing means copying the files into our specify computer directory.
5. for exporting any file you need to use this code ' module.exports = whatever you exporting; ' module is object and exports is the property of module object. (this code is mention in dummy.js with 5 as a comment)
6. for importing any file form other script file you need to use require('exporting the file here ./') which is a function. (this code is mention in details.js with 6 as a comment)
7. for exporting two file ' module.exports = {first: , second:  }; ' (this code is mention in dummy.js with 7 as a comment)  
8. node js is a runtime javascript enviroment, which is also use for backend. node js is a c++ code which is taken from chrome browser v8 engine code. and c++ code is wrap in JS code. which allows us  to write JS code and it accept that code and make server on the basis of c++. when we write js code in nodejs it give code to wrapper which share our js code into c++ code which will create a server by the help of v8 engine code.
9. for running the code on node js press ctrl + tilde (tilde = ~`` key) button of keyboard or go to ... then terminal then new terminal. for running the code either write node filename or install nodemon and write nodemon filename.
10. for further about import and export go to node 2 folder. or import export folder in this file
11.  npm node package manager which is like a store which have so many packages. packages is a code. now  npm have different fulll name coz they have so many language packages on their website. so  it is no longer node packge mangaer instead differnet name liike nahe pata mujhe. write npm -v in cmd it will show its version. npm i packageName will install it. run it by seeing code in npm website.
12. express is a framework for nodeJS. express is use for routing . routing means when we visit main website secondary page like www.wwe.com/batista /batista is routing. route is /url. routing type GET ,POST other are PUT, PATCH ,DELETE many more.  we use GET route when we don't care  if data is seen on url, and use POST route when we don't want to show data on url. (see code in express.js 12 comment)
13. npm i nodemon -g for one time installation and it will run file continously and update it time to time, for cancel the file press ctrl + c. for running the nodemon write nodemon filename , if you see error then write npx nodemon filename.
14. the process between the request and route is middleware. middleware is a function which run before route, means before route if you want to do something then use middleware which is app.use() (see code in middleware.js 14 comment) we can make as many middleware as we want.

