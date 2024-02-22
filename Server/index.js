const express = require('express');
const app = express();
// database connection
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const {
  userPatch,
  userPost,
  userGet,
  userDelete
} = require("./controllers/userController.js");

const {
  playlistPatch,
  playlistPost,
  playlistGet,
  playlistDelete
} = require("./controllers/playlistController.js");

const {
  accountPatch,
  accountPost,
  accountGet,
  accountDelete
} = require("./controllers/accountController.js");

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// check for cors
const cors = require("cors");
app.use(cors({
  domains: '*',
  methods: "*"
}));


// listen to the task request

// user
app.get("/api/users", userGet);
app.post("/api/users", userPost);
app.patch("/api/users", userPatch);
app.put("/api/users", userPatch);
app.delete("/api/users", userDelete);

// playlist
app.get("/api/playlists", playlistGet);
app.post("/api/playlists", playlistPost);
app.patch("/api/playlists", playlistPatch);
app.put("/api/playlists", playlistPatch);
app.delete("/api/playlists", playlistDelete);

// account
app.get("/api/accounts", accountGet);
app.post("/api/accounts", accountPost);
app.patch("/api/accounts", accountPatch);
app.put("/api/accounts", accountPatch);
app.delete("/api/accounts", accountDelete);

app.listen(3001, () => console.log(`Example app listening on port 3001!`))