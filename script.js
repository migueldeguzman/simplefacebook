var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "so tired of all this javascript!"
	},
	{
		username: "Sally",
		timeline: "javascript is so cool!"
	}
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function signIn (username, password) {
	if(username === database[0].username && 
		password === database[0].password) {
		return console.log(newsFeed);
	} else {
		alert("wrong username or password");
	}
}

signIn(userNamePrompt, passwordPrompt);