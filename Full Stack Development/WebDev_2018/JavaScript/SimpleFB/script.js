var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "asdf"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired"
    },
    {
        username: "Sally",
        timeline: "JS is cool"
    }
];

var usernamePrompt = prompt("username:");
var passwordPrompt = prompt("password:");

function isUserValid(username, password) { 
    for(var i=0; i<database.length; i++) {
        if (database[i].username === username &&
        database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    // console.log(isUserValid(user, pass));

    if (isUserValid(user, pass)) {
            console.log(newsFeed);
        } else {
            alert("Sorry, invalid credentials.");
        }
}

signIn(usernamePrompt, passwordPrompt);