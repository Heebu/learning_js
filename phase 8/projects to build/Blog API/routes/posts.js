// routes/posts.js
const express = require("express");
const router = express.Router();

// In-memory post storage
let posts = [
    { id: 1, title: "First Post", content: "This is the first blog post!" },
    { id: 2, title: "Second Post", content: "This is another blog post!" },
];

// GET all posts
router.get("/", (req, res) => {
    res.json(posts);
});

// GET a single post by ID
router.get("/:id", (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
});

// CREATE a new post
router.post("/", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content)
        return res.status(400).json({ message: "Title and content are required" });

    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title,
        content,
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

// UPDATE a post
router.put("/:id", (req, res) => {
    const { title, content } = req.body;
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.title = title || post.title;
    post.content = content || post.content;

    res.json({ message: "Post updated", post });
});

// DELETE a post
router.delete("/:id", (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1)
        return res.status(404).json({ message: "Post not found" });

    posts.splice(postIndex, 1);
    res.json({ message: "Post deleted successfully" });
});

module.exports = router;
