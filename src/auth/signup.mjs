import { baseUrl } from "../api/apiBase.mjs";

const endpoint = "/auction/auth/register";
const input_username = document.querySelector("#userName_signUp");
const input_email = document.querySelector("#userEmail_signUp");
const input_password = document.querySelector("#userPassword_signUp");
const status = document.querySelector("#status-message");

export async function register() {
  const userData = {
    name: input_username.value,
    email: input_email.value,
    password: input_password.value,
  };
  const validate = validateUserInputsSignUp(userData);
  status.innerHTML = "";
  try {
    if (validate) {
      console.log(JSON.stringify(userData));
      const request = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(userData),
      });
      const result = await request.json();
      console.log(request.status);
      console.log(request);
      if (request.status === 201) {
        status.innerHTML = "Account created";
      } else {
        status.innerHTML =
          "The user already exist or something went bad on the server side";
      }
    }
  } catch (e) {}
}
function validateUserInputsSignUp(data) {
  const errorUsername = document.querySelector("#username-error");
  const errorEmail = document.querySelector("#email-error");
  const errorPassword = document.querySelector("#password-error");
  console.log(data.name);
  //this regex is a handy regex expression that covers letters, numbers and udnerscores.
  //I use this to test username;
  let regUserName = /^\w+$/;
  let validateUsername = regUserName.test(data.name);
  if (!validateUsername) {
    errorUsername.innerHTML = "not a valid username.";
  } else {
    errorUsername.innerHTML = "";
  }
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
  if (validateUsername && validateEmail && data.password.length > 7) {
    return true;
  } else {
    return false;
  }
}
