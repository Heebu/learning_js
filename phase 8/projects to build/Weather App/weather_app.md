# 🌦️ Phase 8: Mastery Projects  
## 🧭 Project 2 — Weather App using APIs

### 🎯 Objective
Build a **Weather Application** using **JavaScript**, **HTML**, and **CSS** that fetches real-time weather data from a public API (like OpenWeatherMap).  
You’ll learn how to handle asynchronous requests, manage API responses, and display dynamic content in the browser.

---

### 🧠 Core Concepts Covered
- Working with external **APIs** using `fetch()`
- Handling **JSON** responses
- Managing asynchronous code using **Promises** and **async/await**
- **DOM manipulation** for displaying data dynamically
- Basic **error handling** and **loading states**

---

### 🏗️ Step-by-Step Breakdown

#### 1. Setup Project Structure
Create the following files:
```
weather-app/
│
├── index.html
├── style.css
└── script.js
```

---

#### 2. Get an API Key
- Go to [OpenWeatherMap.org](https://openweathermap.org/api)
- Sign up and get your **free API key**
- Use their **Current Weather Data API**

Example API endpoint:
```
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

---

#### 3. Basic HTML Layout
Include:
- An input field for city name  
- A search button  
- A weather info card  

Example structure:
```html
<div class="weather-container">
  <h1>Weather App</h1>
  <div class="input-group">
    <input type="text" id="cityInput" placeholder="Enter city name..." />
    <button id="searchBtn">Search</button>
  </div>

  <div id="weatherInfo" class="weather-info">
    <!-- Weather details will appear here -->
  </div>
</div>
```

---

#### 4. Fetch Weather Data
Use the `fetch()` function or `async/await` to call the API and retrieve weather data.

Key steps:
- Read the city name from input
- Call the API with your key
- Handle errors (e.g., invalid city name)
- Display results in the UI

---

#### 5. Display Weather Details
Show:
- City name and country  
- Temperature (in °C)  
- Weather description (e.g., “clear sky”)  
- Weather icon (from the API)

Example response fields:
```json
{
  "name": "London",
  "sys": { "country": "GB" },
  "main": { "temp": 18 },
  "weather": [{ "description": "clear sky", "icon": "01d" }]
}
```

---

#### 6. Update the UI
Create DOM elements dynamically and insert the data:
- Use template literals for cleaner HTML
- Style the output with simple CSS

---

#### 7. Handle Loading and Error States
- Show a “Loading...” message while fetching
- Show “City not found” when API returns 404
- Handle empty input gracefully

---

### 🎨 Optional Enhancements
- Add background images that change with weather conditions  
- Show additional details: humidity, wind speed, feels like  
- Add a search history list  
- Implement geolocation to auto-detect user’s city  

---

### 🧩 Learning Outcome
After completing this project, you’ll understand how to:
- Make API requests using `fetch()` and `async/await`  
- Parse and display JSON data  
- Manage real-time user input and async flow  
- Handle UI updates dynamically based on API responses  

---

### ✅ Project Summary
| Feature | Description |
|----------|--------------|
| Search City | Users can search any city by name |
| Real-time Data | Weather info fetched directly from API |
| Dynamic UI | Temperature, description, and icons displayed live |
| Error Handling | Handles invalid city names or failed requests |
| Optional Add-ons | Backgrounds, geolocation, unit toggles |
