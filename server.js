var ejs = require("ejs");
var express = require("express");

var app = express();
app.set("view_engine", "ejs");
var port = 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: false
}));

var methodOverride = require("method-override");
app.use(methodOverride("_method"));

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("/Users/Raz/Projects/Blog/db/blog.db");
//console.log(db.all("SELECT * FROM posts"));

var request = require("request");

app.get("/", function(req, res) {
  res.redirect("/posts");
});

app.get("/posts", function(req, res) {
  db.all("SELECT * FROM posts;", function(err, dataStoredInPosts) {
    if (err) console.log(err);
    else {
      var pTable = dataStoredInPosts;
      console.log(pTable);
      res.render("index.ejs", {
        posts: pTable,
      });
    }
  });
});

app.get("/post/:id", function(req, res) {
  var postId = req.params.id;
  console.log(postId);
  db.get("SELECT * FROM posts WHERE id = (?);", postId, function(err, dataInPost) {
    if (err) console.log(err);
    else {
      var pData = dataInPost;
      console.log(pData);
      res.render("show.ejs", {
        post: pData,
      });
    }
  });
});

app.get("/post/:id/edit", function(req, res) {
  var editID = req.params.id;
  console.log(editID);
  db.get("SELECT * FROM posts WHERE id= (?);", editID, function(err, currentData) {
    if (err) console.log(err);
    else {
      var cPost = currentData;
      res.render("edit.ejs", {
        post: cPost
      });
    }
  });
});

app.post("/post/:id", function(req, res) {
  var editID = req.params.id;
  var textBody = req.body.body;
  var title = req.body.title;
  var imageUrl = req.body.imageUrl;
  
}

app.put("/post/:id/", function(req, res) {
  var editID = req.params.id;
  var textBody = req.body.body;
  var title = req.body.title;
  var imageUrl = req.body.imageUrl;
  db.get("UPDATE posts SET title = (?), body = (?), imageUrl= (?) WHERE id= (?)", title, textBody, imageUrl, editID, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
    res.redirect("/post/" + editID);
  });
});

app.delete("/post/:id", function(req, res) {
  var postId = req.params.id;
  console.log(postId);
  db.get("DELETE FROM posts WHERE ID = (?);", postId, function(err, deleted) {
    if (err) console.log(err);
    else {
      res.redirect("/posts");
    }
  });
});

app.listen(port, function() {
  console.log("listening on Port" + port);
});