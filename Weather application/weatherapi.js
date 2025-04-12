function getWeather() {
    const location = document.getElementById("location").value;
    const result = document.getElementById("result");
  
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
  
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        try {
          const response = JSON.parse(this.responseText);
          result.textContent = `
  City: ${response.name}
  Temperature: ${response.main.temp}°C
  Weather: ${response.weather[0].description}
          `;
        } catch (err) {
          result.textContent = "Error parsing response.";
          console.error(err);
        }
      }
    });
  
    xhr.open("GET", `https://open-weather13.p.rapidapi.com/city/${location}/EN`);
    xhr.setRequestHeader("x-rapidapi-host", "open-weather13.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "47b71dee63msh3655126d1bc208cp1d4265jsn7eef69919704");
  
    xhr.send();
  }
  