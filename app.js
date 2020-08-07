var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Clay", "Jessica", "Justin", "Tony", "Hannah"];

app.get("/", function(req, res){
	res.render("home");
});

app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
});

// When we are adding data to something we need a POST ROUTE
//Install package body-parser so we can get the entries from the form body
app.post("/addfriend", function(req, res){
// 	newfriend came from the form attribute name="newfriend" *****For further reference check friends.ejs
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	// res.send("YOU HAVE REACHED THE POST ROUTE");
	res.redirect("/friends");
	// res.redirect("/friends") will redirect the server to route /friends
});

app.listen(3000, function(){
	console.log("Server started!!");
});