var express = require('express');
var router = express.Router();


const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/create', async function(req,res) {
  let userData = await userModel.create({
    username: "M HASSAN MALIK",   //first question
  nickname: "K999",
  description: "rasengan chidori raikiri kamehamehaaaa sharingan fireball jutsu",   
  categories: ['js', "node", "react", "html", "css"],
  });
  res.send(userData);
});

module.exports = router;



//how i can perform  a case-insensitive search in Mongoose?