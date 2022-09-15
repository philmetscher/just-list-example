const loginForm = document.querySelector('[data-js="loginForm"]');

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  location.href = "./overview-list.html";
});
