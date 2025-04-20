// Function to retrieve a specific cookie by name
function GetCookies(name) {
  const cookies = document.cookie.split(";");
  for (let c of cookies) {
    const [key, val] = c.trim().split("=");
    if (key === name) {
      return decodeURIComponent(val);
    }
  }
  return null;
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const profileElement = document.getElementById("profile");

  // Check if the "formdata" cookie exists
  if (document.cookie.includes("formdata")) {
    const formdata = GetCookies("formdata");
    try {
      // Parse the cookie data
      const parsed = JSON.parse(formdata);
      const username = parsed.name || parsed.email || "User";

      // Display the username in the profile element
      profileElement.innerHTML = `Welcome, <b>${username}</b>!`;
      console.log("Form data retrieved from cookies:", parsed);
    } catch (error) {
      console.error("Error parsing cookie JSON:", error);
    }
  } else {
    // If no cookie is found, display a default message
    profileElement.innerHTML = "Welcome, Guest!";
    console.log("No form data found in cookies.");
  }
});
