import { getToken } from "./auth/status.mjs";
import { baseUrl } from "./api/apiBase.mjs";
import { updateHeaderUser } from "./auth/status.mjs";

const userName = localStorage.getItem("username");
console.log(userName);
const endpoint = `/auction/profiles/${userName}`;
const DOMUsername = document.querySelector("#profile_username");
const DOMEmail = document.querySelector("#profile_email");
const DOMCredits = document.querySelector("#profile_credit");
const DOMavatar = document.querySelector("#profile_avatar");
const btnEditAvatar = document.querySelector("#btn_edit");
const editForm = document.querySelector("#edit_form");
const DOMerrorProfile = document.querySelector(".error-profile");
const token = getToken();
const options = {
  headers: {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
if (token) {
  //runs if user is logged in
  const username = localStorage.getItem("username");
  const credits = localStorage.getItem("credit");
  updateHeaderUser(username);
  getProfile();
} else {
  console.log("user not logged in");
  btnEditAvatar.disabled = true;
  btnEditAvatar.classList.add("btn-secondary");
  DOMerrorProfile.innerHTML += `<div class="col">
  <div class="card m-1 w-100" style="width: 18rem;">
    <div class="m-1">
      <p class="text-danger text-center pt-2">Please log in to see profile information</p>
    </div>
</div>
</div>`;
}

const btn_updateAvatar = document.querySelector("#btn_updateAvatar");
const input_edit = document.querySelector("#edit_input");

console.log(token);

async function getProfile() {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    const result = await response.json();
    console.log(response.statusText);
    if (response.status === 200) {
      console.log(response.statusText);
    } else {
      throw `the API responded with with a status of ${response.status}`;
    }
    console.log(result);
    DOMUsername.innerHTML = result.name;
    DOMEmail.innerHTML = result.email;
    DOMCredits.innerHTML = result.credits;
    console.log(result.avatar);
    DOMavatar.innerHTML = `<img class="w-100 h-100"src="${result.avatar}" onerror="this.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png';" id="profile_avatar">`;
    console.log(result[i].avatar);
  } catch (err) {
    DOMerrorProfile.innerHTML += `<div class="col">
  <div class="card m-1 w-100" style="width: 18rem;">
    <div class="m-1">
      <p class="text-danger text-center pt-2">${err}</p>
    </div>
</div>
</div>`;
  }
}
const modal_edit = document.querySelector(".modal_edit");
btnEditAvatar.addEventListener("click", () => {
  modal_edit.style.display = "block";
});
input_edit.addEventListener("input", () => {
  if (input_edit.value) {
    btn_updateAvatar.innerHTML = "Update";
  } else {
    btn_updateAvatar.innerHTML = "Remove Avatar";
  }
});
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("test");
  updateAvatar();
});

//updating avatar
function updateAvatar() {
  //takes MediaURL for avatar

  console.log(input_edit.value);
  fetch(`${baseUrl}${endpoint}/media`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-Type": "application/json",
    },
    //data in the body
    body: JSON.stringify({
      avatar: input_edit.value,
    }),
  })
    .then((response) => {
      if (response.ok === true) {
        //reloads page if comment is posted to update the display
        document.location.reload(true);
      }
      return response.json();
    })
    .then((Object) => {
      //failed
    })
    .catch((error) => console.log("error", error));
}
