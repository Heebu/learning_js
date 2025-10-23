## 📰 Phase 8 — Project 5: Blog API (Node + Express)

### 📝 Project Overview

This project focuses on building a **RESTful API for a simple blog platform** using **Node.js** and **Express.js**.
You’ll learn how to structure backend code, handle CRUD operations, and manage routes for posts.

The Blog API will allow:

* Creating new blog posts
* Fetching all posts or a single post
* Updating existing posts
* Deleting posts

---

### 🎯 Learning Goals

By completing this project, you’ll understand how to:

1. Set up an Express server and handle routes.
2. Work with REST API methods — `GET`, `POST`, `PUT`, `DELETE`.
3. Use middleware for JSON parsing and error handling.
4. Store and manipulate data (temporarily in memory, or later in MongoDB).
5. Use Postman or cURL to test your endpoints.

---

### 🧱 Folder Structure

```
blog-api/
│
├── package.json
├── server.js
└── routes/
    └── posts.js
```

---

### ⚙️ Features

✅ Create, Read, Update, and Delete posts
✅ RESTful API structure
✅ Organized routing
✅ Error handling middleware
✅ Scalable and extendable structure

---

### 🧩 Technologies Used

* **Node.js**
* **Express.js**
* **Body-parser** (or Express built-in JSON parser)
* *(Optional: MongoDB or local file storage)*

---

### 🚀 How to Run

1. Initialize a Node project:

   ```bash
   npm init -y
   ```
2. Install dependencies:

   ```bash
   npm install express
   ```
3. Run the server:

   ```bash
   node server.js
   ```
4. Open Postman and test endpoints:

    * `GET /api/posts` → Get all posts
    * `GET /api/posts/:id` → Get single post
    * `POST /api/posts` → Add a new post
    * `PUT /api/posts/:id` → Update post
    * `DELETE /api/posts/:id` → Delete post

---

### 🧠 Bonus Challenges

Once you have the basics running:

* Integrate **MongoDB** with Mongoose.
* Add **user authentication** (JWT).
* Create routes for **comments**.
* Implement **pagination** and **search**.
* Deploy your API to **Render** or **Vercel**.