// const express = require('express');
// const fs = require('fs');
// const app = express();
// const port = 3500;

// app.use(express.json());

// // Get all posts
// app.get('/posts', (req, res) => {
//     const data = fs.readFileSync('db.json');
//     const posts = JSON.parse(data).posts;
//     res.send(posts);
// });

// // Get all users
// app.get('/users', (req, res) => {
//     const data = fs.readFileSync('db.json');
//     const users = JSON.parse(data).users;
//     res.send(users);
// });

// // Get all posts by user ID
// app.get('/posts/user/:userId', (req, res) => {
//     const data = fs.readFileSync('db.json');
//     const posts = JSON.parse(data).posts;
//     const userId = parseInt(req.params.userId);
//     const userPosts = posts.filter(post => post.userId === userId);
//     res.send(userPosts);
// });

// // Get all users by user ID
// app.get('/users/:id', (req, res) => {
//     const data = fs.readFileSync('db.json');
//     const users = JSON.parse(data).users;
//     const userId = parseInt(req.params.id);
//     const user = users.find(user => user.id === userId);
//     res.send(user);
// });

// // Add a new post
// app.post('/posts', (req, res) => {
//     const data = fs.readFileSync('db.json');
//     const db = JSON.parse(data);
//     const newPost = req.body;
//     newPost.id = db.posts.length + 1;
//     db.posts.push(newPost);
//     fs.writeFileSync('db.json', JSON.stringify(db));
//     res.send(newPost);
// });

// // Edit an existing post
// app.put('/posts/:id', (req, res) => {
//     const data = fs.readFileSync('db.json');
//     const db = JSON.parse(data);
//     const postId = parseInt(req.params.id);
//     const updatedPost = req.body;
//     db.posts.forEach((post, index) => {
//         if (post.id === postId) {
//             db.posts[index] = updatedPost;
//         }
//     });
//     fs.writeFileSync('db.json', JSON.stringify(db));
//     res.send(updatedPost);
// });

// // Remove an existing post
// app.delete('/posts/:id', (req, res) => {
//     const data = fs.readFileSync('db.json');
//     const db = JSON.parse(data);
//     const postId = parseInt(req.params.id);
//     db.posts = db.posts.filter(post => post.id !== postId);
//     fs.writeFileSync('db.json', JSON.stringify(db));
//     res.send({ message: 'Post removed' });
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });