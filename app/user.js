var express = require('express');
var router = express.Router();
var username = "Aku Ankka from user.js";
var loggedin = false;

router.setUsername = function(name){
    username = name;
    console.log("user.js: username from queries.js = " + username);
}

router.getUsername = function(){    
   return username; 
}

router.post('/login',function(req,res){
    var temp = {};
    temp.username = req.body.username;
    temp.password = req.body.password;
    console.log("user.js: req.session.username = " + req.session.username); 
    req.queries.login(temp, res);
    
});

router.get('/logout',function(req,res){
    console.log("user.js: Logging out!");
    loggedin = false;
    //req.logout();
    username = undefined;
    req.session.destroy(); 
    res.send('Logged out');    
});

module.exports = router;
   