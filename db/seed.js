var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("blog.db");
//Posts must contain a title, a body, and the ability to have an image, but feel free to add more as you see fit.
// db.run("INSERT INTO posts (title, body, imageUrl) VALUES (?, ?, ?)", "7 crazy things at the GA Happy Hour", "Today at the happy hour bonanza held at GA everything was going well... WHEN all of a sudden whilst playing a strange game of Associations with dry-erase markers, a huge nuclear blast in testing facilities had a strange effect. EXPOSLOSIVELY Everybody got superhero powers. THEN someone accidentally threw up and their vommit turned everyone into Pugs which took selfies and uploaded themselves into Kenneth Parcel's database of pugme-shots. LUCKILY a venerated, LEMON WDI student had also gained the power of time travel which they used to prevent the vomit. WHAT followed, was a joyous outcry in which all GA students rejoiced at being reverted from pugs (the time travel path followed the plot-hole theory of time travel). AS EVERYONE KNOWS now all crimes are no longer a problem and all world problems are resolved with the various super powers of all the GA students attending happy hour. Including, water materialization in which atoms of Hydrogen and oxygen materialize out of the finger tips of one GA hackstar. The hacker was able to initiate a PUT in the file for the LAWS_of_PHYSICS.gf and pour 300-1000 kiloliters of water out of their fingers", "http://blogs.independent.co.uk/wp-content/uploads/2011/10/Misfits.jpg", function(err) {
//   if (err) {
//     console.log(err);
//   }
// });
db.run("INSERT INTO comments (tag, body, author, postID) VALUES (?,?,?,?)", "The bomb!", "This article was the bomb! Thank you so much for sharing. Also this is such a cool website... yellow WHO KNEW?", "Twitch", "1", function(err) {
  if (err) {
    console.log(err);
  }
});