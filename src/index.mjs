import { baseUrl } from "./api/apiBase.mjs";
import { register } from "./auth/signup.mjs";
import { logIn } from "./auth/login.mjs";
import { getToken } from "./auth/status.mjs";
import { displayListing } from "./listings/displayListing.mjs";
import { updateUserDOM } from "./auth/status.mjs";
import { signOut } from "./auth/signout.mjs";
import { getAvatarLoggedIn } from "./auth/status.mjs";
import { postListing } from "./listings/createListing.mjs";
const token = getToken();
const btn_addBalance = document.querySelector("#btn_addBalance");
console.log(btn_addBalance);
//credit inputs are used to fill inn the DOM field on certain pages.
const DOM_credits = document.querySelector("#user_credit");
//input for create form
const create_form = document.querySelector("#create_form");
const input_title = document.querySelector("#create_title");
const input_description = document.querySelector("#create_description");
const input_tags = document.querySelector("#create_tags");
const input_media = document.querySelector("#create_media");
const input_ends = document.querySelector("#create_endsAt");

//error create form
const error_title = document.querySelector(".error_title");
const error_ends = document.querySelector(".error_ends");

const DOMcontainer = document.querySelector(".container-cards");

if (token) {
  //runs if user is logged in
  const username = localStorage.getItem("username");
  const credits = localStorage.getItem("credit");
  updateUserDOM(username, credits);
} else {
  DOM_credits.innerHTML = "log in to view ";
  btn_addBalance.disabled = true;
  btn_addBalance.classList.add("btn-secondary");
}

displayListing(DOMcontainer, 5);

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
  console.log(ends.value);
  if (!ends.value) {
    error_ends.innerHTML = "date is required";
  } else {
    error_ends.innerHTML = "";
  }
  const time = ends.value;

  let checkingDate = checkDate(time + "T00:00:00.000Z");
  if (ends.value) {
    console.log("inne");

    console.log(checkingDate);
  }
  console.log(checkingDate);
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
  console.log(isoString);
  const date = new Date(isoString.slice(0, -1));
  const todaysDate = new Date();
  if (todaysDate < date) {
    return true;
  } else {
    return false;
  }
}
