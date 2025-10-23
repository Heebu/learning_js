const apiKey = "YOUR_API_KEY_HERE"; // Get it from https://openweathermap.org/api
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherContainer = document.getElementById("weatherContainer");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weatherDesc = document.getElementById("weatherDesc");
const weatherIcon = document.getElementById("weatherIcon");
const errorMsg = document.getElementById("error");

searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") getWeather();
});

async function getWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        showError("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        showError(error.message);
    }
}

function displayWeather(data) {
    errorMsg.textContent = "";
    weatherContainer.classList.remove("hidden");

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `🌡 ${data.main.temp.toFixed(1)}°C`;
    weatherDesc.textContent = data.weather[0].description
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function showError(message) {
    weatherContainer.classList.add("hidden");
    errorMsg.textContent = message;
}
