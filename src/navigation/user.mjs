import { baseUrl } from "../api/apiBase.mjs";
import { register } from "../auth/signup.mjs";
import { logIn } from "../auth/login.mjs";
import { getToken } from "../auth/status.mjs";
import { updateUserDOM } from "../auth/status.mjs";
import { signOut } from "../auth/signout.mjs";
import { getAvatarLoggedIn } from "../auth/status.mjs";
// login /sign up inputs
const userLoggedIn = document.querySelector(".user-logIn");
const btn_signUp = document.querySelector("#btnHeader_signUp");

const logOut = document.querySelector(".log-out");

// search inputs/buttons, one for the header and one for mobile
const btn_searchHeader = document.querySelector("#btn_searchH");
const input_searchHeader = document.querySelector("#search_fieldH");
const btn_searchMobile = document.querySelector("#btn_searchM");
const input_searchMobile = document.querySelector("#search_fieldM");

//forms
const signup_form = document.querySelector("#signUp_form");
const logIn_form = document.querySelector("#logIn_form");

//checks if user is logged in
if (getToken()) {
  //runs if user is logged in
  userLoggedIn.style.display = "block";
  getAvatarLoggedIn();

  btn_signUp.style.display = "none";
} else {
  //runs if user is not logged in
  console.log("not logged in");
}

signup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

logIn_form.addEventListener("submit", (e) => {
  e.preventDefault();
  logIn();
});

//logout eventlistener
logOut.addEventListener("click", () => {
  signOut();
});


btn_searchMobile.addEventListener("click", () => {
  const searchWord = input_searchMobile.value;

  if (searchWord) {
    window.location.href = `collection.html?search=${searchWord}`;
  }
});
btn_searchHeader.addEventListener("click", () => {
  const searchWord = input_searchHeader.value;

  if (searchWord) {
    window.location.href = `collection.html?search=${searchWord}`;
  }
});
