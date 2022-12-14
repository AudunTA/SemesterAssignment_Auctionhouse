import { baseUrl } from "../api/apiBase.mjs";
const userName = localStorage.getItem("username");
const token = getToken();
const options = {
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
const endpoint = `/auction/profiles/${userName}`;
const DOMavatar = document.querySelector("#profile-pic-header");
export function getToken() {
    if(localStorage.getItem("accessToken")) {
        const token = localStorage.getItem("accessToken");
        return  token;
    }
    else {
        return false;
    }
}
const DOM_username = document.querySelector("#header_username");
const DOM_credits = document.querySelector("#user_credit");
export function updateUserDOM(username, credit) {
    DOM_username.innerHTML = username;
    DOM_credits.innerHTML = credit;
}

export async function getAvatarLoggedIn() {
    try {
      const response = await fetch(
        `${baseUrl}${endpoint}`,
        options
      );
      const result = await response.json();
      console.log(result.avatar);
      console.log("TEST");
    DOMavatar.innerHTML = `<img src="${result.avatar}" onerror="this.src = '/images/profile.jpg';" id="profile_header">`;
    } catch (e) {console.log(e);
    }
  }

export async function updateCredits () {
  console.log("HAHA");
  try {
    const response = await fetch(
      `${baseUrl}${endpoint}`,
      options
    );
    const result = await response.json();
    
    localStorage.setItem("credit", result.credits);

  } catch(e) {

  }
}