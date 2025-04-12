function getWeather() {
    const location = document.getElementById("location").value.trim();
    const resultContainer = document.getElementById("result-container");
    const result = document.getElementById("result");

    // Validate input
    if (!location) {
        result.innerText = "Please enter a valid location.";
        resultContainer.classList.add("show");
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const data = JSON.parse(this.responseText);
                result.innerText = `Location: ${data.location.name},
Region: ${data.location.region},
Country: ${data.location.country},
Temperature: ${data.current.temp_c}°C / ${(data.current.temp_c * 9 / 5 + 32).toFixed(1)}°F,
Condition: ${data.current.condition.text}`;
                resultContainer.classList.add("show");
            } else {
                result.innerText = "Error fetching weather data. Please try again.";
                resultContainer.classList.add("show");
            }
        }
    };

    try {
        xhr.open("GET", `https://api.weatherapi.com/v1/current.json?key=57258b177bfb4e4c8b8102240251204&q=${location}&aqi=no`);
        xhr.send();
    } catch (err) {
        result.innerText = "An error occurred. Please try again.";
        resultContainer.classList.add("show");
        console.error(err);
    }
}
