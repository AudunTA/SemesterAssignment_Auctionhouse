import { getToken } from "../auth/status.mjs";
const btn_logIn = document.querySelectorAll(".btn_logIn");
const btn_signUp = document.querySelectorAll(".btn_signUp");
const modalLogIn = document.querySelector(".modal_logIn");
const modalSignUp = document.querySelector(".modal_signUp");
const btn_close = document.querySelectorAll(".close");
const modalCreate = document.querySelector(".modal_create");
const allModals = document.querySelectorAll(".modal");

for (let i = 0; i < btn_logIn.length; i++) {
  btn_logIn[i].addEventListener("click", () => {
    modalSignUp.style.display = "none";
    modalLogIn.style.display = "block";
  });
}

for (let i = 0; i < btn_signUp.length; i++) {
  btn_signUp[i].addEventListener("click", () => {
    modalSignUp.style.display = "block";
    modalLogIn.style.display = "none";
  });
}
for (let i = 0; i < btn_close.length; i++) {
  btn_close[i].addEventListener("click", () => {
    for (let x = 0; x < allModals.length; x++) {
      allModals[x].style.display = "none";
    }
  });
}

const btn_create = document.querySelector("#btn_create");
export function closeModalLogIn() {
  modalLogIn.style.display = "none";
}

const token = getToken();
if (!token && btn_create) {
  btn_create.disabled = true;
  btn_create.classList.add("btn-secondary");
}

if (btn_create) {
  btn_create.addEventListener("click", (e) => {
    modalCreate.style.display = "block";
  });
}
