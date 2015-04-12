# Power Blogger
A CRUD Web Application for Blogging.

## WHO NEEDS THIS BLOGGING WEB APPLICATION INTERFACE?
Well if you are reading this you must be some sort of hipster so my recommendation, go out there and make your hipster friends proud with a new blog about being a lumberjack (especially if you are not male). You could totally like lumberjacking before it becomes cool, you can live on the edge of culture. Or you could just make a blog! So to answer the question? Who needs it? any hipster who dreams of the GREAT NORTHERN PINE but would rather just sit at home where its warm. Hipsters can't use conventional blogging mechanisms like Blogger, Word Press, or Drupal can they? So they need this cool up and coming Blog Interface!

##WHAT YOU CAN DO WITH THE BLOG?

A - **Post** new STORIES! Now with new "C"reative Creation you can create your own blog posts that nobody will likely care about. Simply click on "Add New Post", to you guessed it, Add a new blog post, then hit Send and email the link (some additional assembly required aka copy and paste the blog post's id-containg link) to all your friends, enemies, or people you might have seen at the grocery store once. 

B - **Get** your STORIES directly from their non-mainstream source! WITH THE AMAZING "R"apid Reading capabilities of the app. Simply click Read posts then you can eventually even read/write edit/delete comments depending on economic factors.

C - **Put** up edits to your posts, ALL DAY! simply by clicking on the "EDIT this" button you will hopefully be linked to a page where you can edit it the Blog post you wrote!

D - **Delete** your posts. Wrote about 2000 words about how much you love your now EX about 20 seconds before they broke up with you? Yeah, you probably wanna delete that. And it's as easy as finding the button under the blog post which allows you to delete the whole POST!

E - Experiencing technical difficulties? **EXPRESS** them to me and I can restart my server and still keep your posts.

F - FIND all the posts you're looking for. Just ***Send*** me a ***Question*** and I'll ***Look*** for them and easily send it to you. 

G - Glad you could read this article. Post comments to each Post (using a username of your choice, a title of your choice, an automatic timestamp, and we'll worry about which post you commented on! View a counter for how many comments have been made to your posts. 
##FUTURE DEVELOPMENTS
- Within a certain amount of time hours, minutes, years? You will be able to comment on posts.

- Easily Find out how many posts you made on a certain topic with a search feature! Or an instances thing? Or I might even add keywords (Add your keywords to the bottom and have the amount of each keyword used on your Posts page!).


- My thoughts on how to add  a comment/features: adding a comment to a particular article... To do this I will require a simple form which allows someone to post to a given postID. There will then have to be an associated comments table in the same database. When someone writes a comment to a particular post it will have to update that comment's PostID (much like an author's ID would appear on the books description) that comment's body (and title in some blogs but usually not...) that comment's user..It should have an automatically generated timestamp. Once a comment is posted to a particular article IF any comments exists they must be displayed on that post's page (along with the user, title, timestamp). Ideally the homepage where all the articles are would have a link with "0 comments" or more written. By clicking on that page the user is directed to: post/:id/comments/ (Ideally there would be only one page which would allow editing or deleting of all the comments. This may be achieved by having a textbody editor appear for each comment who's postID matches the req.params.id.) In conclusion comments require the following: (id, tag, body, author, postID-set by looking at id of comments written). The count of comments associated with a specific blogpost may be achieved by comments.withpostID(?).length.  

- Change the colors of your posts and customize the look and feel.

- Support for emojis, email lists, Followers! 

## ERD DIAGRAMATIC DIAGRAM
![Image of ERD](https://github.com/zargold/Blog/blob/master/Slide1.jpg?raw=true"ERD")

