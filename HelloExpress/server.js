// const express = require("express");
// const app = express();

// // To access POST data
// // make sure these lines are above any app.get or app.post code blocks
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

// // req is short for request
// // res is short for response
// app.get("/api", (req, res) => {
//   res.send("Our express api server is now sending this over to the browser");
// });

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );


const express = require("express");
const app = express();
const port = 8000;
    

// const users = [
//   { firstName: "Reimu",  lastName: "Hakurei"    },
//   { firstName: "Marisa", lastName: "Kirisame"   },
//   { firstName: "Sanae",  lastName: "Kochiya"    },
//   { firstName: "Sakuya", lastName: "Izayoi"     },
//   { firstName: "Momiji", lastName: "Inubashiri" }
// ];

// To access POST data
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World This is chris" });
    // res.json(users);
});
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );



/*
// Route Parameters
// Getting Data from a URL
// Any data you wish to pass via the URL must be indicated by a ':'.  It will then be available in the req.params object:
// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon


app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json( users[req.params.id] );
});copy


Update Data
updating data using a put request:

app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
});copy


Deleting Data
deleting data using a delete request.

app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});
*/