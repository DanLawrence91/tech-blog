// collects values from login form, sends a post request and if successful will redirect user
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Incorrect username or password");
    }
  } else {
    alert("You must enter both username and password");
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Please ensure you create a unique username, email and password");
    }
  } else {
    alert("Please fill out all sign-up boxes");
  }
};

document.querySelector("#login-form").addEventListener("submit", loginFormHandler);

document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);
