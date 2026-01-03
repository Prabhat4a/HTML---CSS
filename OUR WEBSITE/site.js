const creatAcc = document.querySelector(".creat-acc");
const loginAcc = document.querySelector(".Login-acc");
const loginForm = document.querySelector(".objects");
const registerForm = document.querySelector(".objects-register");

creatAcc.onclick = () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
};

loginAcc.onclick = () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
};

document.getElementById("loginBtn").onclick = () => {
  document.getElementById("authSection").style.display = "none";
  document.getElementById("mainApp").style.display = "block";
};
