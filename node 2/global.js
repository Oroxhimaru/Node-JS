/* window is one of the global object you can use it in console of browser write this
 setTimeout(()=>{alert("hello")}, 3000)
 without writing window.setTimeout... because window is global obj it will run.
 */

 // global object in NodeJS
 console.log(global);
 //For running this console, write node global (global means global.js file) in terminal  

 global.setTimeout(() => {
    console.log("PIKACHU PIKA PIKA PIKACHU");
 }, 3000);     //write (node global) in terminal,


 // we don't need global keyword before function coz it's  global LOL.
 setTimeout(() => {
    console.log("SHARINGAN");
 }, 3000);     //write (node global) in terminal


 const int = setInterval(() => {
    console.log("PIKA PIKA");
 }, 1000);    //setInterval keep runing after execution while setTimeout only execute once.
 /* for cancelling click ctrl + C in terminal
 or add clearInterval in setTimeout */

 setTimeout(() => {
    console.log("PIKACHU");
    clearInterval(int);  //This clearInterval cancelling int const's setInterval
 }, 3000); 

 console.log(__dirname); //bring directory
 console.log(__filename);  //bring filename

 console.log(document.querySelector); //not going to work in nodeJS coz we don't have window object plus we don't need it in backend