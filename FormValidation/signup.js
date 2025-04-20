document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.getElementById("signup_form");
    const showpass = document.getElementById("showpass");
    const pass = document.getElementById("password");
    const email = document.getElementById("email");
    const repass = document.getElementById("repassword");
  
    const passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{}[\]:;"'|\\<>.,?/`~])[A-Za-z0-9!@#$%^&*()\-_=+{}[\]:;"'|\\<>.,?/`~]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    const validatePasswords = () => {
      const pswderr = document.getElementById("pswderr");
      const repswderr = document.getElementById("repswderr");
  
      if (!passPattern.test(pass.value)) {
        pswderr.innerHTML = "❌ Must contain a symbol and a number.";
        repswderr.innerHTML = "";
        return false;
      } else if (repass.value !== "" && pass.value !== repass.value) {
        pswderr.innerHTML = "";
        repswderr.innerHTML = "❌ Passwords do not match.";
        return false;
      } else {
        pswderr.innerHTML = "";
        repswderr.innerHTML = "";
        return true;
      }
    };
  
    const validateEmail = () => {
      const emailerr = document.getElementById("emlerr");
      if (email.value !== "" && !emailPattern.test(email.value)) {
        emailerr.innerHTML = "❌ Invalid email format.";
        return false;
      } else {
        emailerr.innerHTML = "";
        return true;
      }
    };
  
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
  
      if (validateEmail() && validatePasswords()) {
        const form = new FormData(formElement);
        const formData = Object.fromEntries(form.entries());
  
        document.cookie = `formdata=${encodeURIComponent(JSON.stringify(formData))}; path=/; max-age=3600`;
        console.log("Form data saved in cookies:", formData);
  
        setTimeout(() => {
          window.location.href = "index.html";
        }, 6000);
      } else {
        console.log("Validation failed. Not redirecting.");
      }
    });
  
    email.addEventListener("input", validateEmail);
    pass.addEventListener("input", validatePasswords);
    repass.addEventListener("input", validatePasswords);
  
    showpass.addEventListener("change", () => {
      const type = showpass.checked ? "text" : "password";
      pass.setAttribute("type", type);
      repass.setAttribute("type", type);
    });
  });
  