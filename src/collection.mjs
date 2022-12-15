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
const btn_addBalance = document.querySelector("#btn_addBalance");

//get parameters
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const filter_text = document.querySelector(".filter-text");
const btn_span = document.querySelector("#button-span");
const container = document.querySelector(".container-cards");
//credit inputs are used to fill inn the DOM field on certain pages.
const DOM_credits = document.querySelector("#user_credit");

const searchWord = params.get("search");

if (getToken()) {
  const username = localStorage.getItem("username");
  const credits = localStorage.getItem("credit");

  updateUserDOM(username, credits);
} else {
  console.log("not logged in");
  DOM_credits.innerHTML = "log in to view ";
  btn_addBalance.disabled = true;
  btn_addBalance.classList.add("btn-secondary");
}

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

const create_form = document.querySelector("#create_form");

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
