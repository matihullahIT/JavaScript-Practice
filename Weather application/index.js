function getWeather() {
    const xhr = new XMLHttpRequest();
    const results = document.getElementById("result"); // match HTML ID
    const location = document.getElementById("location").value;

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            console.log("my response data", data.location);

            results.innerText = `Location: ${data.location.name}, 
            ${data.location.country}
Temperature: ${data.current.temp_c}°C / ${(data.current.temp_c * 9 / 5 + 32).toFixed(1)}°F
Condition: ${data.current.condition.text}`;

            results.classList.remove("hidden");
        } else if (this.readyState === 4) {
            console.log("Error: " + this.statusText);
        }
    };

    try {
        xhr.open("GET", `https://api.weatherapi.com/v1/current.json?key=57258b177bfb4e4c8b8102240251204&q=${location}&aqi=no`);
        xhr.send();
    } catch (err) {
        console.log(err);
    }
}
