import { getToken } from "./auth/status.mjs";
import { baseUrl } from "./api/apiBase.mjs";

const userName = localStorage.getItem("username");
console.log(userName);
const endpoint = `/auction/profiles/${userName}`;
const DOMUsername = document.querySelector("#profile_username");
const DOMEmail = document.querySelector("#profile_email");
const DOMCredits = document.querySelector("#profile_credit");
const DOMavatar = document.querySelector("#profile_avatar");
const btnEditAvatar = document.querySelector("#btn_edit");
const editForm = document.querySelector("#edit_form");
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
    btnEditAvatar.disabled = true;
    btnEditAvatar.classList.add("btn-secondary");
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
      console.log(response.statusText);
      if(response.status === 200) {
        console.log(response.statusText);
      } else { throw "the API did not respond with with a status of 200"};
      console.log(result);
      DOMUsername.innerHTML =result.name;
      DOMEmail.innerHTML = result.email;
      DOMCredits.innerHTML = result.credits;
      console.log(result.avatar);
      DOMavatar.innerHTML = `<img src="${result.avatar}">`;

    } catch (err) {
      console.log("test");
      console.log(err);
    }
  }
const modal_edit = document.querySelector(".modal_edit");
btnEditAvatar.addEventListener("click", () => {
  modal_edit.style.display="block";
});

editForm.addEventListener("submit",(e) => {
  e.preventDefault();
  console.log("test");
  updateAvatar();
  

});


function updateAvatar() {
  const input_edit = document.querySelector("#edit_input");
  console.log(input_edit.value);
  fetch(`${baseUrl}${endpoint}/media`, {
    method: 'PUT', 
    headers: {
      Authorization: `Bearer ${token}`,
      'content-Type': 'application/json',
    },
    //data in the body
    body: JSON.stringify( {
    avatar: input_edit.value,
    })
  })
    .then((response) => {
      if (response.ok === true) {
        //reloads page if comment is posted to update the display
       document.location.reload (true); 
      }
      return response.json();
    })
    .then((Object) => {
      //failed
    })
    .catch(error => console.log("error",  error));
  }
