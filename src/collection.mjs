import { postListing } from "./listings/createListing.mjs";
import { getToken } from "./auth/status.mjs";
import { search } from "./listings/searchListing.mjs";
import { baseUrl } from "./api/apiBase.mjs";

//login/register imports
import { register } from "./auth/signup.mjs";
import { logIn } from "./auth/login.mjs";
import { signOut } from "./auth/signout.mjs";
import { getAvatarLoggedIn } from "./auth/status.mjs";

import { updateUserDOM } from "./auth/status.mjs";
import { sortFilter } from "./listings/filterListing.mjs";
import { displayListing } from "./listings/displayListing.mjs";

//get parameters
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const filter_text = document.querySelector(".filter-text");
const btn_span = document.querySelector("#button-span");
const container = document.querySelector(".container-cards");

// login /sign up inputs
const userLoggedIn = document.querySelector(".user-logIn");
const btn_signUp = document.querySelector("#btnHeader_signUp");
const btn_addBalance = document.querySelector("#btn_addBalance");
const logOut = document.querySelector(".log-out");
const searchWord = params.get("search");

if (getToken()) {
  const username = localStorage.getItem("username");
  const credits = localStorage.getItem("credit");
  btn_signUp.style.display = "none";
  userLoggedIn.style.display = "block";
  btn_signUp.style.display = "none";
  getAvatarLoggedIn();
  updateUserDOM(username, credits);
} else {
  console.log("not logged in");
}
logOut.addEventListener("click", () => {
  signOut();
});
if (searchWord) {
  filter_text.innerHTML = "search:";
  container.innerHTML = "";

  await search(searchWord);
  btn_span.innerHTML = ` <a href="collection.html"><button class="btn btn-danger m-1">${searchWord} X</button></a>`;
}
const sortButtons = document.querySelectorAll(".sort-icons");
const filter = params.get("filter");
console.log(filter);
//console.log(searchWord);
if (!filter && !searchWord) {
  displayListing(4);
}
if (filter) {
  filter_text.innerHTML = "filter:";
  if (filter === "games") {
    const icon_games = document.querySelector(".fa-gamepad");
    sortButtons[0].style.backgroundColor = "#FF667B";
    sortButtons[0].style.color = "white";
    icon_games.style.color = "white";
    btn_span.innerHTML = ` <a href="collection.html"><button class="btn btn-danger m-1">games X</button></a>`;
    sortFilter("games");
  }
  if (filter === "vehicles") {
    const icon_vehicles = document.querySelector(".fa-car");
    sortButtons[1].style.backgroundColor = "#FF667B";
    sortButtons[1].style.color = "white";
    icon_vehicles.style.color = "white";
    btn_span.innerHTML = ` <a href="collection.html"><button class="btn btn-danger m-1">vehicles X</button></a>`;
    sortFilter("vehicles");
  }
  if (filter === "art") {
    const icon_art = document.querySelector(".fa-palette");
    sortButtons[2].style.backgroundColor = "#FF667B";
    sortButtons[2].style.color = "white";
    icon_art.style.color = "white";
    btn_span.innerHTML = ` <a href="collection.html"><button class="btn btn-danger m-1">art X</button></a>`;
    sortFilter("art");
  }
}

console.log(baseUrl);

const signup_form = document.querySelector("#signUp_form");

const logIn_form = document.querySelector("#logIn_form");
const create_form = document.querySelector("#create_form");

signup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

logIn_form.addEventListener("submit", (e) => {
  e.preventDefault();
  logIn();
});
const input_title = document.querySelector("#create_title");
const input_description = document.querySelector("#create_description");
const input_tags = document.querySelector("#create_tags");
const input_media = document.querySelector("#create_media");
const input_ends = document.querySelector("#create_endsAt");

create_form.addEventListener("submit", (e) => {
  console.log("test");
  e.preventDefault();
  postListing(
    input_title.value,
    input_description.value,
    input_tags.value,
    input_media.value,
    input_ends.value
  );
});
