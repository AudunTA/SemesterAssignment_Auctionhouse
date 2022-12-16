import { baseUrl } from "../api/apiBase.mjs";
const userName = localStorage.getItem("username");
const token = getToken();
const options = {
  headers: {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
const endpoint = `/auction/profiles/${userName}`;
const DOMavatar = document.querySelector("#profile-pic-header");
export function getToken() {
  if (localStorage.getItem("accessToken")) {
    const token = localStorage.getItem("accessToken");
    return token;
  } else {
    return false;
  }
}
const DOM_username = document.querySelector("#header_username");
const DOM_credits = document.querySelector("#user_credit");
export function updateUserDOM(username, credit) {
  DOM_username.innerHTML = username;
  DOM_credits.innerHTML = credit;
}
export function updateHeaderUser(username) {
  DOM_username.innerHTML = username;
}

export async function getAvatarLoggedIn() {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    const result = await response.json();
    console.log(result.avatar);
    console.log("TEST");
    DOMavatar.innerHTML = `<img src="${result.avatar}" onerror="this.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png';" id="profile_header">`;
  } catch (e) {
    console.log(e);
  }
}

export async function updateCredits() {
  console.log("HAHA");
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    const result = await response.json();

    localStorage.setItem("credit", result.credits);
  } catch (e) {}
}
