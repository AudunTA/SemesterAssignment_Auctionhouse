import { postListing } from "./listings/createListing.mjs";
import { getToken } from "./auth/status.mjs";
import { search } from "./listings/searchListing.mjs";
import { baseUrl } from "./api/apiBase.mjs";
import { updateUserDOM } from "./auth/status.mjs";
import { sortFilter } from "./listings/filterListing.mjs";
import { displayListing } from "./listings/displayListing.mjs";

const create_form = document.querySelector("#create_form");

//create inputs
const input_title = document.querySelector("#create_title");
const input_description = document.querySelector("#create_description");
const input_tags = document.querySelector("#create_tags");
const input_media = document.querySelector("#create_media");
const input_ends = document.querySelector("#create_endsAt");

//error create form
const error_title = document.querySelector(".error_title");
const error_ends = document.querySelector(".error_ends");

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
  displayListing(container, 5);
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

create_form.addEventListener("submit", (e) => {
  console.log("test");
  e.preventDefault();
  const validate = validateCreateForm(input_title, input_ends);
  console.log(validate);
  if (validate) {
    postListing(
      input_title.value,
      input_description.value,
      input_tags.value,
      input_media.value,
      input_ends.value
    );
  }
});
//validation that title has a value and the end date is in the future
function validateCreateForm(title, ends) {
  if (!title.value) {
    error_title.innerHTML = "title is required";
  } else {
    error_title.innerHTML = "";
  }

  if (!ends.value) {
    error_ends.innerHTML = "date is required";
  } else {
    error_ends.innerHTML = "";
  }
  const time = ends.value;

  let checkingDate = checkDate(time + "T00:00:00.000Z");
  if (ends.value) {
  }
  if (!checkingDate && time) {
    error_ends.innerHTML = "Make sure its a future date";
  }
  //if check date is true, time(ends.value) has a value and title has a value it will return true
  if (checkingDate && time && title.value) {
    return true;
  } else {
    return false;
  }
}

function checkDate(isoString) {
  const date = new Date(isoString.slice(0, -1));
  const todaysDate = new Date();
  if (todaysDate < date) {
    return true;
  } else {
    return false;
  }
}
