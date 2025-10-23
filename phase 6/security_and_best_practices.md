# Phase 6: Expert Level — Part 3  
### 🔐 Security and Best Practices

Security is as important as functionality.  
A single overlooked vulnerability can expose data, break trust, or damage an entire system.  
This phase helps you understand how to write **safe**, **clean**, and **maintainable** JavaScript code.

---

## 🧠 1. Input Sanitization

Input sanitization ensures that **user-provided data** can’t be used to harm your application.

### Why It Matters
- Prevents malicious scripts from executing.  
- Protects your database and backend systems.  

### Best Practices
- Always **validate and sanitize inputs** (e.g., form data, URLs).  
- Use built-in or library-based sanitizers (`DOMPurify`, for example).  
- Never insert user input directly into HTML or SQL queries.

✅ **Goal:** Every piece of user input must be treated as *untrusted* until verified.

---

## ⚠️ 2. Preventing XSS (Cross-Site Scripting)

**XSS attacks** occur when malicious scripts are injected into your web pages.

### Prevention Tips
- Escape all dynamic data before inserting into the DOM.  
- Use **Content Security Policy (CSP)** headers to block inline scripts.  
- Avoid `innerHTML` unless you fully trust the content.  
- Use libraries like `DOMPurify` for sanitizing user-generated content.

✅ **Example of Risky Code:**
```js
// ❌ Avoid
document.body.innerHTML = userInput;
```

✅ **Better Approach:**
```js
// ✅ Safe
document.createTextNode(userInput);
```

---

## 🛡️ 3. Preventing CSRF (Cross-Site Request Forgery)

**CSRF attacks** trick users into performing actions they didn’t intend — like deleting an account.

### Prevention Tips
- Use **CSRF tokens** for all state-changing requests.  
- Validate tokens on the server side.  
- Use **SameSite cookies** to restrict cross-site requests.  
- Verify request origins before processing.

✅ **Goal:** Ensure only valid and intended requests are processed.

---

## 🧩 4. Managing Authentication and Secrets

Protecting your authentication flow is critical for security.

### Best Practices
- Never expose API keys or secrets in your frontend code.  
- Use environment variables for sensitive data.  
- Implement **JWT (JSON Web Tokens)** securely — always verify and expire them properly.  
- Use **HTTPS** to encrypt communication between client and server.

✅ **Goal:** Keep secrets secret — even during development.

---

## 🧹 5. Writing Clean and Maintainable Code

Readable, consistent code reduces errors and speeds up collaboration.

### Principles
- Follow consistent **naming conventions**.  
- Use **Prettier** and **ESLint** for formatting and linting.  
- Break code into **modules** — each handling a single responsibility.  
- Keep functions **pure and predictable** where possible.  
- Write **comments** for clarity, not for explaining poor structure.

✅ **Goal:** Code should be self-explanatory and modular.

---

## 🧭 6. Testing and Error Handling

Good developers test early and handle errors gracefully.

### Guidelines
- Use `try...catch` for predictable error recovery.  
- Write unit tests using **Jest** or **Mocha**.  
- Validate all network responses before use.  
- Use `console.error` and logging tools for debugging in production.

✅ **Goal:** Handle errors without breaking user experience or leaking system info.

---

## 🎯 Wrap-Up

By the end of this part, you should:
- Understand how to secure your JS applications from common threats.  
- Implement input validation and sanitization effectively.  
- Prevent XSS and CSRF attacks.  
- Keep your code clean, organized, and well-tested.  
- Maintain the discipline of **security-first thinking**.