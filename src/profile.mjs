import { getToken } from "./auth/status.mjs";
import { baseUrl } from "./api/apiBase.mjs";

const userName = localStorage.getItem("username");
console.log(userName);
const endpoint = `/auction/profiles/${userName}`;
const DOMUsername = document.querySelector("#profile_username");
const DOMEmail = document.querySelector("#profile_email");
const DOMCredits = document.querySelector("#profile_credit");
const token = getToken();
const options = {
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
console.log(token);
if(!token) {
    console.log("user not logged in");
}else {
    getProfile();
}



async function getProfile() {
    try {
      const response = await fetch(
        `${baseUrl}${endpoint}`,
        options
      );
      const result = await response.json();
      console.log(result);
      DOMUsername.innerHTML =result.name;
      DOMEmail.innerHTML = result.email;
      DOMCredits.innerHTML = result.credits;

    } catch (e) {console.log(e);
    }
  }
