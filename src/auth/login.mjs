import { baseUrl } from "../api/apiBase.mjs";
import { closeModalLogIn } from "../navigation/modal.js";
const endpoint = "/auction/auth/login";

const userEmail_logIn = document.querySelector("#userEmail_logIn");
const userPassword_logIn = document.querySelector("#userPassword_logIn");
const errorEmail = document.querySelector("#error-emailLogIn");
const errorPassword = document.querySelector("#error-passwordLogIn");
const statusLogin = document.querySelector("#status-logIn");

export async function logIn() {
  statusLogin.innerHTML = "";
  const user = {
    email: userEmail_logIn.value,
    password: userPassword_logIn.value,
  };
  const validate = validateUserInputsLogIn(user);
  try {
    if (validate) {
      const request = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      });
      const results = await request.json();
      if (request.status === 200) {
        localStorage.setItem("accessToken", results.accessToken);
        localStorage.setItem("email", results.email);
        localStorage.setItem("username", results.name);
        localStorage.setItem("credit", results.credits);
        location.reload();
      } else {
        statusLogin.innerHTML = "Email and password did not match.";
      }
    }
  } catch (e) {}
}

function validateUserInputsLogIn(data) {
  //this regex is a handy regex expression that covers letters, numbers and udnerscores.
  //I use this to test username;
  //regEx who only allowes @stud.noroff.no/noroff.no email type.
  let regEmail = /^[a-zA-Z0-9._%+-]+@(stud.noroff).no/;
  let validateEmail = regEmail.test(data.email);
  console.log(validateEmail);
  if (!validateEmail) {
    errorEmail.innerHTML = "not a valid email (use @stud.noroff.no).";
  } else {
    errorEmail.innerHTML = "";
  }
  console.log(data.password.length);
  if (data.password.length < 8) {
    console.log("inne");
    errorPassword.innerHTML = "password must be 8 or more characters.";
  } else {
    errorPassword.innerHTML = "";
  }

  //returns eighter true or falsed based on if the inputs are validated /only then is the api called.
  if (validateEmail && data.password.length > 7) {
    return true;
  } else {
    return false;
  }
}
