const creatAcc = document.querySelector(".creat-acc");
const loginAcc = document.querySelector(".Login-acc");
const loginForm = document.querySelector(".objects");
const registerForm = document.querySelector(".objects-register");

creatAcc.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

loginAcc.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

const googleLoginButtons = document.querySelectorAll(".google-login");
googleLoginButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    alert(
      "Google Sign-In placeholder.\nImplement Google OAuth for real login."
    );
  });
});
